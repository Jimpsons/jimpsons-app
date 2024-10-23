/* Context to manage the state for the Phantom wallet connection */
import { createContext, useEffect, useState, ReactNode } from "react";
import { getProvider, eagerConnect, disconnectWallet } from "../utils/phantomUtils";
import { PhantomProvider, PhantomResponse } from "../types/phantomTypes";


/** Interface for WalletContext values */
interface WalletContextProps {
  publicKey: string | null;
  isConnected: boolean;
  connectWallet: () => Promise<void>;
  handleDisconnect: () => Promise<void>;
  error: string | null;
}

/** Create the WalletContext with default null values */
export const WalletContext = createContext<WalletContextProps | null>(null);

/** Props interface for WalletProvider */
interface WalletProviderProps{
  children: ReactNode;
}


/**
 * WalletProvider component that wraps the app and provides the wallet connection state.
 */
export const WalletProvider = ({children}: WalletProviderProps) => {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Manually connects to the wallet by invoking the Phantom provider's request method
   */
  const connectWallet = async(): Promise<void> => {
    const provider: PhantomProvider | null = getProvider();

    if(provider) {
      try {
        const response: PhantomResponse = await provider.request({method: "connect"});
        setPublicKey(response.publicKey.toString());
        setIsConnected(true);
      } catch(err) {
        console.error("User rejected the connection request: ", err);
        setError("Failed to connect wallet");
      } 
    } else {
      // TODO: Show tooltip here
      alert("Phantom wallet is not installed. Please install it from 'https://phantom.app/download'")
      setError("Phantom wallet is not installed. Please install it from 'https://phantom.app/download'")
    }
  }


  /**
   * Disconnects the wallet by invoking the Phantom Provider's disconnect method.
   */
  const handleDisconnect = async (): Promise<void> => {
    if (isConnected) {
      await disconnectWallet();
      setPublicKey(null);
      setIsConnected(false);
    }
  };


  /**
   * Eagerly connects to the wallet when page load if the connection is already trusted.
   * Listens for account changes to automatically update the connection state 
   */
  useEffect(() => {
    const provider = getProvider();

    if(provider) {
      // Eagerly connect using Phantom's "onlyIfTruseted" option
      eagerConnect().then((response) => {
        if(response?.publicKey) {
          setPublicKey(response.publicKey.toString());
          setIsConnected(true);
        }
      });

      // Listen to account change and update state accordingly
      provider.on("accountChanged", (publicKey) => {
        if(publicKey) {
          setPublicKey(publicKey.toString());
          setIsConnected(true)
        } else {
          setPublicKey(null);
          setIsConnected(false);
        }
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{publicKey, isConnected, connectWallet, handleDisconnect, error}}>
      {children}
    </WalletContext.Provider>
  )
};

export default WalletProvider;
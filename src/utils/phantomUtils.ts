import { PhantomProvider, PhantomResponse } from "../types/phantomTypes";

/**
 * Detect if phantom wallet is installed in the browser and returns the provider.
 * If Phantom is not installed, it opens Phantom's website for the user to download.
 * 
 * @returns {PhantomProvider | null} - The Phantom provider object is installed, otherwise null.
 */
export const getProvider = (): PhantomProvider | null => {
  if(typeof window !== "undefined" && window.solana?.isPhantom) {
    return window.solana;
  }  

  // If Phatom is not installed, redirect to Phantom website download section
  window.open("https://phantom.app/download", "_blank")
  return null;
} 


/**
 * Attempt to connect to Phantom automatically if the user is already connected without prompting them.
 * This method uses Phantom's  `onlyIfTrusted` parameter to avoid showing the connect prompt if the user is already connectd.
 * 
 * @return {Promise<PhantomResponse | undefined>} - The response from the connection attempt, or undefined if it fails.
 */
export const eagerConnect = async(): Promise<PhantomResponse | undefined> => {
  try {
    const response = await window.solana?.request({
      method: "connect",
      params: {onlyIfTrusted: true}
    });
    return response;
  } catch(err) {
    console.error("Eager Connection failed: ", err)
  }
};


/**
 * Disconnects the Phantom wallet from the current session.
 * 
 * @return {Promise<void>} - Resolve when the wallet is disconnected or throws an error if the process fails.
 */
export const disconnectWallet = async(): Promise<void> => {
  try {
    await window.solana?.disconnect();
  } catch(err) {
    console.error("Error while disconnecting wallet: ", err);
  }
};
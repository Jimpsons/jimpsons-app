import { useContext } from "react"
import { WalletContext } from "../../../context/WalletContext"

/**
 * ConnectWalletButton component that manages the wallet connection and UI state.
 */
const ConnectWalletButton: React.FC = () => {
  const walletContext = useContext(WalletContext);

  // Check if walletContext is null
  if(!walletContext) {
    console.error("WalletContext not found")
    // TODO: Show other fallback UI
    return <div>Wallet context not available</div>
  }
  
  const {connectWallet, handleDisconnect, publicKey, isConnected, error} = walletContext

  return (
    <div>
      {error && <p>{error}</p>}
      {isConnected ? (
        <div>
          <p>Connected: {publicKey?.slice(0, 4)}...{publicKey?.slice(-4)}</p>
          <button onClick={handleDisconnect}>Disconnect Wallet</button>
        </div>
      ): (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  )
}

export default ConnectWalletButton;
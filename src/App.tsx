import WalletProvider from "./context/WalletContext";
import ConnectWalletButton from "./components/ui/ConnectWalletButton/ConnectWalletButton";
import WalletInfo from "./components/ui/WalletInfo/WalletInfo";

const App: React.FC = () =>{

  return (
    <>
      <WalletProvider>
        <ConnectWalletButton/>
        <WalletInfo/>
      </WalletProvider>
    </>
  )
}

export default App

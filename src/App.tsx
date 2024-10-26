import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WalletProvider from "./context/WalletContext";
import NFTLandingPage from "./pages/Landing/Landing";
import { Presale } from "./pages/Presale/Presale";

const App: React.FC = () => {
  return (
    <Router>
      <WalletProvider>
        <Routes>
          <Route path="/" element={<NFTLandingPage />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </WalletProvider>
    </Router>
  );
};

export default App;

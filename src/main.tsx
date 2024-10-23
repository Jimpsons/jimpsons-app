import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
import NFTLandingPage from "./pages/Landing/Landing.tsx";
import "./styles/landing.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <NFTLandingPage />
  </StrictMode>
);

import React from "react";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const projectId = "1fe8664f6b594b48b753e05fdf0c30a5";

const metadata = {
  name: "PowerTap Game",
  description: "DApp to connect MetaMask, Trust Wallet, Binance Wallet",
  url: "https://yourgame.netlify.app",
  icons: ["https://walletconnect.com/walletconnect-logo.png"]
};

const chains = [mainnet, polygon, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: false
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains
});

export default function App() {
  return (
    <WagmiConfig config={config}>
      <div style={{ padding: "2rem", color: "white", background: "#121212", minHeight: "100vh" }}>
        <h1>Connect Wallet</h1>
        <w3m-button />
      </div>
    </WagmiConfig>
  );
}
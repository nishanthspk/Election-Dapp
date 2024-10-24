
import React from 'react';
import ReactDOM from 'react-dom/client';

import '@rainbow-me/rainbowkit/styles.css';
// Importing the main App component
import App from './App';

// Importing CSS (optional)
import './index.css';

import {getDefaultConfig,RainbowKitProvider} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  baseSepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();



// Getting the root element in the HTML file
const rootElement = document.getElementById('root');

// Creating a root and rendering the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
<WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RainbowKitProvider>
  </QueryClientProvider>
    </WagmiProvider>
);

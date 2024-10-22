// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import '@rainbow-me/rainbowkit/styles.css';
// import {
 
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   sepolia,
//   optimism,
//   arbitrum,
//   base,
// } from 'wagmi/chains';
// import {
//   QueryClientProvider,
//   QueryClient,
// } from "@tanstack/react-query";

// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet, sepolia, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });



// const queryClient = new QueryClient();



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//       <RainbowKitProvider> 
          
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
  
//   </RainbowKitProvider>
//   </QueryClientProvider>
//     </WagmiProvider>
 
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App';

// Importing CSS (optional)
import './index.css';

// Getting the root element in the HTML file
const rootElement = document.getElementById('root');

// Creating a root and rendering the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

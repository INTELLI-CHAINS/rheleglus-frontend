import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/grid/bootstrap-grid.scss'
import App from './App';
import 'assets/styles/main.scss'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import getLibraryEther from 'utils/getLibraryEther';

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");
const Web3Provider = createWeb3ReactRoot("web3");

export const getLibrary = (provider) => {
  return provider;
};
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary} >
    <Web3Provider>
      <Web3ProviderNetwork getLibrary={getLibraryEther}>
        <App />
      </Web3ProviderNetwork>
    </Web3Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
);
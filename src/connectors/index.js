// import { NetworkConnector } from "@web3-react/network-connector";
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { LedgerConnector } from "@web3-react/ledger-connector";
// import { TrezorConnector } from "@web3-react/trezor-connector";
// import { LatticeConnector } from "@web3-react/lattice-connector";
// import { FrameConnector } from "@web3-react/frame-connector";
// import { AuthereumConnector } from "@web3-react/authereum-connector";
// import { MagicConnector } from "@web3-react/magic-connector";
// import { PortisConnector } from "@web3-react/portis-connector";
// import { TorusConnector } from "@web3-react/torus-connector";

// const POLLING_INTERVAL = 12000;
// const RPC_URLS = {
//   1: process.env.RPC_URL_1,
//   4: process.env.RPC_URL_4,
// };

export const injected = new InjectedConnector({
  supportedChainIds: [4],
})

// export const network = new NetworkConnector({
//   urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
//   defaultChainId: 1,
// });

export const walletconnect = new WalletConnectConnector({
  rpc: { 4: 'https://rinkeby.infura.io/v3/63273290f2b64f1d956e2a607d17b196' },
  qrcode: true,
})

export const walletlink = new WalletLinkConnector({
  url: 'https://rinkeby.infura.io/v3/63273290f2b64f1d956e2a607d17b196',
  appName: 'web3-react example',
  supportedChainIds: [4],
})

// export const ledger = new LedgerConnector({
//   chainId: 1,
//   url: RPC_URLS[1],
//   pollingInterval: POLLING_INTERVAL,
// });

// export const trezor = new TrezorConnector({
//   chainId: 1,
//   url: RPC_URLS[1],
//   pollingInterval: POLLING_INTERVAL,
//   manifestEmail: "dummy@abc.xyz",
//   manifestAppUrl: "http://localhost:1234",
// });

// export const lattice = new LatticeConnector({
//   chainId: 4,
//   appName: "web3-react",
//   url: RPC_URLS[4],
// });

// export const frame = new FrameConnector({ supportedChainIds: [1] });

// export const authereum = new AuthereumConnector({ chainId: 42 });

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.FORTMATIC_API_KEY,
  chainId: 4,
})

// export const magic = new MagicConnector({
//   apiKey: process.env.MAGIC_API_KEY,
//   chainId: 4,
//   email: "hello@example.org",
// });

// export const portis = new PortisConnector({
//   dAppId: process.env.PORTIS_DAPP_ID,
//   networks: [1, 100],
// });

// export const torus = new TorusConnector({ chainId: 1 });
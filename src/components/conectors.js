import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",
  3: "https://speedy-nodes-nyc.moralis.io/3749d19c2c6dbb6264f47871/eth/ropsten",
  80001: "https://rpc-mumbai.maticvigil.com",
};

export const WalletConnect = new WalletConnectConnector({
  rpc: {
    4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    3: "https://speedy-nodes-nyc.moralis.io/3749d19c2c6dbb6264f47871/eth/ropsten",
  },
  chainId: 4,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const InjectedMetaMask = new InjectedConnector({
  supportedChainIds: [4, 1, 3, 5, 42, 137, 80001],
});

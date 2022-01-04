// import Web3 from 'web3'
import web3NoAccount from './web3'

// Addresses
import {
  getNftAddress,
  getMetadataAddress,
  getRegistryAddress,
  getMarketplaceAddress,
  getShibAddress,
  getLeashAddress,
  getShibaSwapAddress,
} from './addressHelpers'
import { ethers, Contract } from 'ethers'
// ABI
import marketplaceABI from '../config/abi/marketplace.json'
import metadataAbi from '../config/abi/metadata.json'
import nftAbi from '../config/abi/nft.json'
import erc20Abi from '../config/abi/erc20.json'
import shibaSwapRouterAbi from '../config/abi/shibaswapabi.json'
import registryAbi from '../config/abi/registry.json'
// import prToken from "config/abi/claimRefund.json";

export const getContract = (abi, address, web3) => {
  const _web3 = web3 ? web3 : web3NoAccount
  return new _web3.eth.Contract(abi, address)
}

export const getMarketplaceContract = (web3) => {
  return getContract(marketplaceABI, getMarketplaceAddress(), web3)
}
export const getMarketplaceWrite = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const tokenContract = new Contract(
    getMarketplaceAddress(),
    marketplaceABI,
    signer
  )
  return tokenContract
  // return getContract(marketplaceABI, getMarketplaceAddress(), web3)
}
export const getmetadataContract = (web3) => {
  return getContract(metadataAbi, getMetadataAddress(), web3)
}
export const getNftContract = (web3) => {
  return getContract(nftAbi, getNftAddress(), web3)
}
export const getNftContractWrite = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const tokenContract = new Contract(getNftAddress(), nftAbi, signer)
  return tokenContract
}
export const getRegistryContract = (web3) => {
  return getContract(registryAbi, getRegistryAddress(), web3)
}

export const getShibContract = (web3) => {
  return getContract(erc20Abi, getShibAddress(), web3)
}
export const getgetShibContractWrite = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const tokenContract = new Contract(getShibAddress(), erc20Abi, signer)
  return tokenContract
  // return getContract(marketplaceABI, getMarketplaceAddress(), web3)
}
export const getLeashContract = (web3) => {
  return getContract(erc20Abi, getLeashAddress(), web3)
}

export const getSwapRouterContract = (web3) => {
  return getContract(shibaSwapRouterAbi, getShibaSwapAddress(), web3)
}

export const getLeashContractWrite = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const tokenContract = new Contract(getLeashAddress(), erc20Abi, signer)
  return tokenContract
  // return getContract(marketplaceABI, getMarketplaceAddress(), web3)
}

export const getSwapRouterContractWrite = (web3) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const shibaSwapContract = new Contract(
    getShibaSwapAddress(),
    shibaSwapRouterAbi,
    signer
  )

  return shibaSwapContract
}

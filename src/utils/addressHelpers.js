import addresses from '../config/contracts.js'

export const getAddress = (address) => {
  return address['4']
}

export const getNftAddress = () => {
  return getAddress(addresses.nft)
}

export const getMetadataAddress = () => {
  return getAddress(addresses.metadata)
}

export const getRegistryAddress = () => {
  return getAddress(addresses.registry)
}
export const getMarketplaceAddress = () => {
  return getAddress(addresses.marketplace)
}
export const getShibAddress = () => {
  return getAddress(addresses.shib)
}

export const getLeashAddress = () => {
  return getAddress(addresses.leash)
}

export const getShibaSwapAddress = () => {
  return getAddress(addresses.swapRouter)
}

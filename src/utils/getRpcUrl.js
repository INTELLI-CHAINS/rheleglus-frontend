import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [
  'https://rinkeby.infura.io/v3/63273290f2b64f1d956e2a607d17b196',
]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl

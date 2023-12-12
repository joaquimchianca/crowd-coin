import Web3 from 'web3'

let web3

// check if running code in browser or next server
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we in browser and metamask is runnning.
    web3 = new Web3(window.web3.currentProvider)
} else {
    // on the server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/e1e0a8a1a9e04bddb72b6f40ef3cf3bc'
    )
    web3 = new Web3(provider)
}

export default web3
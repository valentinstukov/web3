// src/web3.js
import Web3 from 'web3';

const getWeb3 = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        return web3;
    } else {
        console.error("Please install MetaMask!");
        return null;
    }
};

export default getWeb3;
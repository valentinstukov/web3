import React, { useState } from 'react';
import getWeb3 from './web3';
import axios from 'axios';

const NFTMinter = () => {
    const [tokenId, setTokenId] = useState('');
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);

    const mintNFT = async () => {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        const nftContract = new web3.eth.Contract(NFTContract.abi, contractAddress);
        setAccount(accounts[0]);
        setContract(nftContract);

        // Mint NFT
        await nftContract.methods.mint(accounts[0], tokenId).send({ from: accounts[0] });
    };

    return (
        <div>
            <h1>NFT Minter</h1>
            <input
                type="text"
                placeholder="Enter Token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
            />
            <button onClick={mintNFT}>Mint NFT</button>
            {contract && <p>Connected to contract at {contract._address}</p>}
            {account && <p>Connected with account {account}</p>}
        </div>
    );
};

export default NFTMinter;
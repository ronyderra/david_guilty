import React, { useEffect, useState } from 'react'
import cancelBtn from '../img/cancelIcon.png'
import metaIcon from '../img/MetaMaskIcon.png'
import WalletConnectIcon from '../img/WalletConnectIcon.png'
import { useWeb3React } from '@web3-react/core';
import { WalletConnect } from './conectors';
import { InjectedMetaMask } from './conectors';
import { contractAddress } from '../helpers/consts';

export default function ConnectWallet(props) {
    const {ethereum} = window;
    const { activate, account, chainId, library, active} = useWeb3React();
    const [showMetaWallet, setShowMetaWallet] = useState(true);
    // console.log("account from wallet connect",account);
    // console.log("chainID from wallet connect",chainId);
         
    useEffect(() => {
        localStorage.clear();
    }, [])

    useEffect(() => {
        if(!ethereum){
            console.log("please install MetaMask");
            setShowMetaWallet(false);
        }
    }, [])


    const connectMetaMaskWalletHandler = async() => {
        try{
            await activateAccount(InjectedMetaMask);
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x3' }], // chainId must be in hexadecimal numbers
            });
            handleCloseWallet();
        }
        catch(err){
            console.log(err);
        }
     }

    const connectkWalletConnectHandler = async() =>{
        try{
            await activateAccount(WalletConnect);
            await switchNetwork();
            handleCloseWallet();
        }
        catch(e){
            console.log(e);
        }
    }
    const handleCloseWallet = () =>{
        props.isOpen(false);
    }
   
    const activateAccount = async (accountToActivate) => {
        await activate(accountToActivate);
    }

    const switchNetwork = async () => {
        try {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x4" }],
          });
        } 
        catch (switchError) {
            console.log(switchError);
        }
      };

  return (
    <div className='connectWalletCompDiv'>
        <div className='flexRow'>
            <label className='connectWalletLabel'>Connect Wallet</label>
            <button className='navBtn' onClick={handleCloseWallet}><img src={cancelBtn}></img></button>
        </div>
        <button className='WalletBtn' onClick={connectMetaMaskWalletHandler} disabled={!showMetaWallet}>
            <img src={metaIcon}></img>
            MetaMask
        </button>
        <button className='WalletBtn' onClick={connectkWalletConnectHandler}>
            <img src={WalletConnectIcon}></img>
            WalletConnect
        </button>
    </div>
  )
}

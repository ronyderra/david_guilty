import React, { useEffect, useState } from 'react'
import Jazzicon from 'react-jazzicon';
import dgLogo from '../img/DGlogo.svg';
import menu from '../img/menu.png';
import ConnectWallet from './ConnectWallet';
import Socials from './Socials';
import { useWeb3React } from '@web3-react/core';
import { networkIdRinkby } from '../helpers/consts';


export default function NavBar(props) {
    const menustyle = {display : "none"}
    const [isMenuOpen, setISMenuOpen] = useState(true);
    const [showConnectWallet, setShowConnectWallet] = useState(false);
    const { account, active, chainId, deactivate} = useWeb3React();
    const [walletBtnClass, setWalletBtnClass] = useState("connectWalletBtn");
    
    useEffect(() => {
        if(props.isMobile){
           setISMenuOpen(false);
       }
    }, [props.isMobile]);

    useEffect(() => {
        // console.log("in use effect ");
        // console.log(account);
        // console.log("chain id",chainId);

        if(account !== undefined){
            // console.log("chain id",chainId);
            if(chainId === networkIdRinkby)
                setWalletBtnClass("walletIsConnected")  
            else
                setWalletBtnClass("wrongNetBtn")
        }
        else{
            setWalletBtnClass("connectWalletBtn")
            
        }
    }, [account,chainId,active]);

    
    const toggleMenu = () =>{
        if(window.screen.width < 700){
            let isOpen = isMenuOpen;
            setISMenuOpen(!isOpen);
        }
        // console.log("menu in toggle",isMenuOpen);
    }   

   const handleConnect = () =>{
       if(walletBtnClass === "walletIsConnected")
       {
        setShowConnectWallet(false);
        setWalletBtnClass("connectWalletBtn")
        deactivate();
       }
       if(walletBtnClass === "connectWalletBtn"){
           setShowConnectWallet(true);
       }
   }

   const handleClose = () =>{
       setShowConnectWallet(false);
   }

   
   let connectWalletBtnValue = (walletBtnClass==="connectWalletBtn")? "Connect Wallet" : 
   (walletBtnClass==="walletIsConnected")? account?.slice(0,6) + "...." + account?.slice(-5) : "Wrong Network"; 
//    console.log(walletBtnClass);
  return (
    <div className='navBarContainer'>
            <div>
                <img className='elipseBtn' src={dgLogo}/>
            </div>
            <div className='navRight'>
                <nav className='navUl'>
                    <ul style={!isMenuOpen ? menustyle : {}}>
                        <div className='textsNav'>
                            <li className='NavBarTextBtn'><a href=''></a>About</li>
                            <li className='NavBarTextBtn'><a href=''></a>Gallery</li>
                            <li className='NavBarSocialsBtn'><Socials/></li>
                        </div>
                        
                    </ul>
                </nav>
                <button className={walletBtnClass} onClick={handleConnect}> 
                    {connectWalletBtnValue} 
                    {(walletBtnClass === 'walletIsConnected') && <Jazzicon diameter={16} address={`${account}`} />}
                </button>
                <div className='navBarSocials'>
                    <Socials/>
                </div>
           <img className='menu' src={menu} onClick={toggleMenu}/>

           
        </div>
        {showConnectWallet && <ConnectWallet isOpen={handleClose}/>  }
             
        
    </div>
  )
}

        
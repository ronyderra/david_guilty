import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import smartContractAbi from "../contracts/smartContractAbi.json";
import plusBtnPath from "../img/VectorPlus.png";
import minusBtnPath from "../img/VectorMinus.png";
import { itemPrice, convertToWei, contractAddress } from "../helpers/consts.js";
import Eth from "../img/ETH 1.svg";
import { useWeb3React } from "@web3-react/core";

export default function MintComp() {
  const { account, library, active, networkId } = useWeb3React();
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [floorPrice, setFloorPrice] = useState(itemPrice);
  const [canMint, setCanMint] = useState(false);

  useEffect(() => {
    if (active) {
      setCanMint(true);
    } else {
      setCanMint(false);
    }
    // if(networkId !== networkIdRinkby){
    //     setCanMint(false);
    // }
  }, [account, active, networkId]);

  const mintNftHandler = async () => {
    try {
      if (active) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner(); // Add a random wallet address here
        const nftContract = new ethers.Contract(contractAddress, smartContractAbi, signer);
        let priceToPay = floorPrice.toString();
        console.log(priceToPay)
        const options = { value: ethers.utils.parseEther(priceToPay) };
        let mint = await nftContract.mint(numberOfItems, options);
        console.log(mint);
      } else {
        console.log("account is not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleIncrementItems = () => {
    let tempNumberOfItems = numberOfItems;
    tempNumberOfItems++;
    setNumberOfItems(tempNumberOfItems);
    setFloorPrice(tempNumberOfItems * itemPrice);
  };
  const handleDecrementItems = () => {
    let tempNumberOfItems = numberOfItems;
    if (tempNumberOfItems > 1) {
      tempNumberOfItems--;
      setNumberOfItems(tempNumberOfItems);
      setFloorPrice(tempNumberOfItems * itemPrice);
    }
  };

  return (
    <div className="mintCompDIV">
      <div className="mintInputs">
        <div className="mintItems">
          <label className="inputsLabel">MINT ITEMS</label>
          <div className="inputnumOfItems">
            <button className="plusMinusBtn" onClick={handleDecrementItems}>
              <img src={minusBtnPath} />
            </button>
            {numberOfItems}
            <button className="plusMinusBtn" onClick={handleIncrementItems}>
              <img src={plusBtnPath} />
            </button>
          </div>
        </div>
        <div className="mintItems">
          <label className="inputsLabel">FLOOR PRICE</label>
          <div className="inputPrice">
            {floorPrice.toFixed(3)}
            <label>ETH</label>
            <img src={Eth} />
          </div>
        </div>
      </div>
      <div className="mintBtnDiv">
        <button
          onClick={mintNftHandler}
          className="mintBtn"
          variant="contained"
          disabled={!canMint}
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
}

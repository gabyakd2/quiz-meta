import React from "react"
import { Button } from "@nextui-org/react";
import { ethers } from "ethers";
import { checkAccount } from "../services/checkAccount";



function ButtonConnMeta() {

  async function connectWallet() {
    if(typeof window.ethereum !== "undefined"){
      await checkAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log("Account:", await signer.getAddress());
    }
  }
  return (
    <Button onClick={connectWallet}>
      Connect Wallet
    </Button>
  )
}

export default ButtonConnMeta
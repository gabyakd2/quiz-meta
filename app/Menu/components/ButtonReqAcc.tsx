"use client"
import React from "react";
import { Button } from "@nextui-org/react";
import { checkAccount } from "../services/checkAccount";



function ButtonReqAcc() {

  return (
    <Button color="danger" onClick={checkAccount}>
      Request Account
    </Button>
  );
}

export default ButtonReqAcc;
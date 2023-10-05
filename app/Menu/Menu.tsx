"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import ListboxWrapper from "./components/ListboxWrapper";
import Image from "next/image";
import imageMenu2 from "../images/imageMenu2.jpg";
import {ButtonReqAcc, ButtonConnMeta} from "./components/"

function Menu() {
  return (
    <div className="mx-auto p-4 max-w-screen-lg">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col justify-between md:w-2/3">
          <div>
            <h1 className="text-5xl font-bold mb-5 md:mb-5">¿How much you know of games?</h1>
            <ButtonReqAcc />
            <ButtonConnMeta />
          </div>
          <ListboxWrapper>
            <Listbox>
              <ListboxItem key="delete" className="text-danger" color="danger">
                Iniciar Quiz
              </ListboxItem>
              <ListboxItem key="copy">Linkedin</ListboxItem>
              <ListboxItem key="edit">Github</ListboxItem>
            </Listbox>
          </ListboxWrapper>
        </div>
        <Image
          src={imageMenu2}
          alt="Image of Menu"
          width="600"
          className="rounded-3xl mt-5 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Menu;

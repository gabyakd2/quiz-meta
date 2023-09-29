"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import ListboxWrapper from "./components/ListboxWrapper";
import Image from "next/image";
import imageMenu2 from "../images/imageMenu2.jpg";

function Menu() {
  return (
    <div className="">
      <h1>Título del Quiz</h1>
      <div className="flex">
        <ListboxWrapper>
          <Listbox aria-label="Actions">
            <ListboxItem key="new">New file</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
        <Image src={imageMenu2} alt="Image of Menu" width="700" />
      </div>
    </div>
  );
}

export default Menu;

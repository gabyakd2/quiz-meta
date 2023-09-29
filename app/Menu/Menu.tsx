"use client"
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import ListboxWrapper from "./components/ListbowWrapper";
import {Button} from "@nextui-org/button"; 


function Menu() {
  return (
    <div>
      <h1>Título del Quiz</h1>
        <Button>Click me</Button>
      <ListboxWrapper>
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
      </ListboxWrapper>
      {/* <Image /> */}
    </div>
  );
}

export default Menu;

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

function Menu() {
  return (
    <div>
      <h1>Título del Quiz</h1>
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
      {/* <Image /> */}
    </div>
  );
}

export default Menu;

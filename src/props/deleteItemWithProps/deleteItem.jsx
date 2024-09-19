import React, { useState } from "react";
import DeleteDialog from "./deleteDialog";

const DeleteItem = ({ items, onDelete, onCancel }) => {
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleOpen = (item) => {
    setItemToDelete(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemToDelete(null);
    onCancel();
  };

  const handleDelete = () => {
    onDelete(itemToDelete);
    setOpen(false)
  };

  return (
    <div>
        <h2 style={{padding: 10}}>List of Items</h2>
        <ul style={{padding: 10, listStyle: "none"}}>
          {items.map((item) => (
            <li key={item.id} style={{display: "flex", justifyContent: "space-between", padding: "5px"}}>
              {item.name}{" "}
              <button onClick={() => handleOpen(item)}>Delete</button>
            </li>
          ))}
        </ul>
        <DeleteDialog handleClose={handleClose} handleDelete={handleDelete} open={open} itemToDelete={itemToDelete}/>
    </div>
  );
};

export default DeleteItem;

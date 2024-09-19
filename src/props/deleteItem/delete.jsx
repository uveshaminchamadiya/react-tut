import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

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
    handleClose();
  };

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{margin: "10px"}}>
            {item.name}{" "}
            <button onClick={() => handleOpen(item)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Delete Item</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {itemToDelete?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteItem;

import { useState } from "react";
import DeleteItem from "./deleteItem";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ListOfItems = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Books" },
    { id: 2, name: "Pens" },
    { id: 3, name: "Notebooks" },
    { id: 4, name: "Colors" },
    { id: 5, name: "Toys" },
  ]);

  const handleDelete = (item) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    toast.success(`Item Deleted successfully!`);
  };

  const handleCancel = () => {
    toast.warning("Operation canceled!");
  };

  return (
    <div>
      <DeleteItem items={items} onDelete={handleDelete} onCancel={handleCancel} />
      <ToastContainer />
    </div>
  );
};

export default ListOfItems;

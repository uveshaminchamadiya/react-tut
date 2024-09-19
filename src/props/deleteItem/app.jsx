import { useState } from "react";
import DeleteItem from "./delete";

const ListOfItems = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Books" },
    { id: 2, name: "Pens" },
    { id: 3, name: "Notebooks" },
    { id: 4, name: "Colors" },
    { id: 4, name: "Toys" },
  ]);

  const handleDelete = (item) => {
    if (confirm(`Do you want to delete ${item.name}?`)) {
      setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    }
  };


  return (
    <div>
      <DeleteItem items={items} onDelete={handleDelete} />
    </div>
  );
};

export default ListOfItems;



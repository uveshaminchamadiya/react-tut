const DeleteItem = ({ items, onDelete }) => {
    return (
      <div>
        <h2>List of Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} {" "}
              <button onClick={() => onDelete(item)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DeleteItem;
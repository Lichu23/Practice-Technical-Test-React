import { useState } from "react";
import { Item } from "../../models/item";
import ItemList from "./components/ItemList";

function ItemForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setIsError] = useState(false);
  const [itemList, setItemList] = useState<Item[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleDeleteItem = (itemId: string) => {
    const filteredItems = itemList.filter((item) => item.id !== itemId);
    setItemList(filteredItems);
  };

  const addItemToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      setIsError(true);
      throw new Error("Debe haber minimo 1 letra");
    }

    const id = Math.random().toString(16).slice(2);
    const item: Item = { value: inputValue, id: id };

    setItemList([...itemList, item]);
    setIsError(false);
    setInputValue("");
  };

  return (
    <div>
      <h1>Test React</h1>
      <form onSubmit={addItemToList} aria-label="Add items to list" >
        <input onChange={handleChange} value={inputValue} />
        {error ? (
          <p style={{ color: "red" }}>El campo debe contener minimo 1 letra</p>
        ) : (
          ""
        )}
        <button>Add Item</button>
      </form>
      
      <ItemList
        itemList={itemList}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default ItemForm;

import { Item } from "../../../models/item";

interface ItemListProps {
  itemList: Item[];
  handleDeleteItem: (id: string) => void;
}

function ItemList({ itemList, handleDeleteItem }: ItemListProps) {
  const handleDelete = (id: string) => {
    handleDeleteItem(id);
  };

  return (
    <div>
      <p>
        {itemList.length === 0 ? (
          <p>Debes agregar un item</p>
        ) : (
          <div>
            {itemList.map((item) => (
              <ul key={item.id}>
                <button onClick={() => handleDelete(item.id)}>
                  {item.value}
                </button>
              </ul>
            ))}
          </div>
        )}
      </p>
    </div>
  );
}

export default ItemList;

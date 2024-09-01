import React from "react";
import { Item } from "../types";

interface Props {
  items: Item[];
  handleItemsChange: (
    index: number,
    field: string,
    value: string | number
  ) => void;
  addItem: () => void;
}

const ItemsList: React.FC<Props> = ({ items, handleItemsChange, addItem }) => {
  const handleInputChange =
    (index: number, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "quantity" || field === "price"
          ? parseFloat(e.target.value)
          : e.target.value;
      handleItemsChange(index, field, value);
    };

  return (
    <div>
      <h3>Items List</h3>
      {items.map((item, index) => (
        <div key={index} className="item-row">
          <div className="column">
            <span>Item Name</span>
            <input
              type="text"
              name={`items[${index}].name`}
              value={item.name}
              onChange={handleInputChange(index, "name")}
              required
            />
          </div>
          <div className="column ml-15">
            <span>Quantity</span>
            <input
              type="number"
              name={`items[${index}].quantity`}
              value={item.quantity}
              onChange={handleInputChange(index, "quantity")}
              required
            />
          </div>
          <div className="column ml-15">
            <span>Price</span>
            <input
              type="number"
              name={`items[${index}].price`}
              value={item.price}
              onChange={handleInputChange(index, "price")}
              required
            />
          </div>
          <div className="column ml-15">
            <span>Total</span>
            <input
              className="w-75"
              type="number"
              value={
                item.quantity && item.price ? item.quantity * item.price : ""
              }
              readOnly
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={addItem} className="add-item-button">
        Add New Item
      </button>
    </div>
  );
};

export default ItemsList;

import React from "react";
import { Item } from "../types";

interface Props {
  items: Item[];
  handleItemsChange: (
    index: number,
    field: string,
    value: string | number
  ) => void;
}

const ItemsList: React.FC<Props> = ({ items, handleItemsChange }) => {
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
              placeholder="Item Name"
              value={item.name}
              onChange={handleInputChange(index, "name")}
              required
            />
          </div>
          <div className="column">
            <span>Quantity</span>
            <input
              type="number"
              name={`items[${index}].quantity`}
              placeholder="Quantity"
              value={item.quantity}
              onChange={handleInputChange(index, "quantity")}
              required
            />
          </div>
          <div className="column">
            <span>Price</span>
            <input
              type="number"
              name={`items[${index}].price`}
              placeholder="Price"
              value={item.price}
              onChange={handleInputChange(index, "price")}
              required
            />
          </div>
          <div className="column">
            <span>Total</span>
            {item.quantity * item.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

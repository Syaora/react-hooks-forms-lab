import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleForm(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)
    setItemName("")
    setItemCategory("")
  }

  function handleItemChange(event){
    setItemName(event.target.value)
  }

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

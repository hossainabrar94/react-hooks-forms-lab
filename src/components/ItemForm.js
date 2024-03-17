import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [itemCategory, setItemCategory] = useState('Produce')

  const [itemName, setItemName] = useState("")

  function addItemToList(e){
    setItemName(e.target.value)
  }

  function addItemCategoryToList(e){
    setItemCategory(e.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    let newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addItemToList}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={addItemCategoryToList}>
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

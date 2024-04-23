let items = []; // Replace Mongoose model with an empty array

export const getAllItems = () => {
  return items;
};

export const getItem = (id) => {
  const foundItem = items.find(item => item.id === id);
  return foundItem ? foundItem : null; // Return null if item not found
};

export const createItem = (item) => {
  // Assign a unique ID (consider using a library like uuid for better generation)
  item.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  items.push(item);
  return item;
};

export const updateItem = (id, updateData) => {
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    items[itemIndex] = { ...items[itemIndex], ...updateData }; // Update item properties
    return items[itemIndex];
  }
  return null; // Return null if item not found
};

export const deleteItem = (id) => {
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1); // Remove item from array
    return true;
  }
  return false; // Return false if item not found
};


export default {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
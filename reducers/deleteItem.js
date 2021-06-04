export const deleteItemReducer = (items, id) => {
  const itemEntries = Object.entries(items).filter(([itemId]) => itemId !== id);
  return Object.fromEntries(itemEntries);
};

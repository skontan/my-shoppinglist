import { increaseItemReducer } from "./increaseItem";

export const addItemReducer = (items, name) => {
  const itemEntry = Object.entries(items).find(
    ([id, item]) => item.name === name
  );
  if (itemEntry) {
    const [id] = itemEntry;
    return increaseItemReducer(items, id);
  }
  return {
    ...items,
    // Generera uuid v4
    [Object.values(items).length]: { name: name, quantity: 1 },
  };
};

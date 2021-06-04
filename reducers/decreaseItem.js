import { deleteItemReducer } from "./deleteItem";

export const decreaseItemReducer = (items, id) => {
  if (items[id].quantity === 1) {
    return deleteItemReducer(items, id);
  }
  return {
    ...items,
    [id]: {
      ...items[id],
      quantity: items[id].quantity - 1,
    },
  };
};

export const increaseItemReducer = (items, id) => {
  return {
    ...items,
    [id]: {
      ...items[id],
      quantity: items[id].quantity + 1,
    },
  };
};

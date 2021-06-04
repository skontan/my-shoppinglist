import { ACTIONS } from "../utils/constants/actions";
import { deleteItemReducer } from "./deleteItem";
import { increaseItemReducer } from "./increaseItem";
import { decreaseItemReducer } from "./decreaseItem";
import { addItemReducer } from "./addItem";

export const itemReducer = (items, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return addItemReducer(items, action.payload);

    case ACTIONS.DELETE_ITEM:
      return deleteItemReducer(items, action.payload);

    case ACTIONS.DECREASE_QUANTITY:
      return decreaseItemReducer(items, action.payload);

    case ACTIONS.INCREASE_QUANTITY:
      return increaseItemReducer(items, action.payload);
  }
};

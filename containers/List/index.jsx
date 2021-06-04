import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { View, TextInput, Text, SafeAreaView, Button } from "react-native";
import { itemReducer } from "../../reducers/item";
import { ACTIONS } from "../../utils/constants/actions";
import { ProductItem } from "../../components/ProductItem";

const initialState = {
  "93bfc1cb-0698-4acd-8cee-52506e737f48": { name: "Milk", quantity: 1 },
};

// Låtsas att det finns en server. Jobba med mockade API:er.

export const List = () => {
  const [input, setInput] = useState("");
  const [items, dispatch] = useReducer(itemReducer, initialState);

  const handlePress = () => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: input });
    setInput("");
  };

  const handleDecrease = (id) => {
    dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: id });
  };

  const handleIncrease = (id) => {
    dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_ITEM, payload: id });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TextInput
        onChangeText={setInput}
        onSubmitEditing={handlePress}
        value={input}
        style={{ backgroundColor: "#FFF", height: 40, width: "100%" }}
      />
      <Button onPress={handlePress} title="Add item" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        {/* show something if empty list */}
        {Object.entries(items).map(([id, item]) => (
          <ProductItem
            key={id}
            id={id}
            item={item}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleDelete={handleDelete}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

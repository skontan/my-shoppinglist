import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [
        ...state,
        { id: state.length, name: action.payload, quantity: 1 },
      ];
  }
};

const initialState = [{ id: 0, name: "Milk", quantity: 1 }];

export const List = () => {
  const [input, setInput] = useState("");
  const [items, dispatch] = useReducer(reducer, initialState);

  const handlePress = () => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: input });
    setInput("");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TextInput
        onChangeText={setInput}
        value={input}
        style={{ backgroundColor: "#FFF", height: 40, width: "100%" }}
      />
      <Button onPress={handlePress} title="Add item" />
      {items.map((item) => (
        <Text key={item.id}>
          {item.name} {item.quantity}
        </Text>
      ))}
    </View>
  );
};

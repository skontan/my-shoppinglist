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
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        [Object.values(state).length]: { name: action.payload, quantity: 1 },
      };

    case ACTIONS.DECREASE_QUANTITY:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: state[action.payload].quantity - 1,
        },
      };

    case ACTIONS.INCREASE_QUANTITY:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: state[action.payload].quantity + 1,
        },
      };
  }
};

const initialState = { 0: { name: "Milk", quantity: 1 } };

export const List = () => {
  const [input, setInput] = useState("");
  const [items, dispatch] = useReducer(reducer, initialState);

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
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        {Object.entries(items).map((item) => (
          <View
            key={item[0]}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20 }} key={item[0]}>
              {item[1].name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <QuantityButton
                text="-"
                onPress={() => handleDecrease(item[0])}
              />
              <Text style={{ fontSize: 20 }}>{item[1].quantity}</Text>
              <QuantityButton
                text="+"
                onPress={() => handleIncrease(item[0])}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export const QuantityButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 15,
        backgroundColor: "grey",
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{ color: "white", textAlignVertical: "center", fontSize: 20 }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

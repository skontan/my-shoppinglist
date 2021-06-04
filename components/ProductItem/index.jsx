import React from "react";
import { View, Text } from "react-native";
import { DeleteButton } from "../DeleteButton";
import { QuantityButton } from "../QuantityButton";

export const ProductItem = ({
  id,
  item,
  handleDelete,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <View
      key={id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        marginBottom: 20,
      }}
    >
      <DeleteButton onPress={() => handleDelete(id)} />
      <Text style={{ fontSize: 20 }} key={id}>
        {item.name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <QuantityButton text="-" onPress={() => handleDecrease(id)} />
        <Text style={{ fontSize: 20, width: 30, textAlign: "center" }}>
          {item.quantity}
        </Text>
        <QuantityButton text="+" onPress={() => handleIncrease(id)} />
      </View>
    </View>
  );
};

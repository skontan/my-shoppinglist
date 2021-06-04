import React from "react";
import { TouchableOpacity, Text } from "react-native";

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

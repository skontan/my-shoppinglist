import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 15,
        backgroundColor: "red",
        width: 20,
        height: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
      }}
    >
      <Text
        style={{ color: "white", textAlignVertical: "center", fontSize: 15 }}
      >
        -
      </Text>
    </TouchableOpacity>
  );
};

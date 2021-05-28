import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Test = (props) => {
  return (
    <View style={styles.container}>
      <Text>Test page</Text>
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Go Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

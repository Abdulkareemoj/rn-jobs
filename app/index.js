import React from "react";
import { Text, View } from "react-native";

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is hard 🎉</Text>

      <ScrollView></ScrollView>
      <TextInput>Enter</TextInput>
    </View>
  );
};

export default YourApp;

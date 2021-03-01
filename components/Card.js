import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={{ ...styles.Card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  Card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    shadowRadius: 6,
    padding: 20,
    borderRadius: 10,
    elevation: 8,
  },
});

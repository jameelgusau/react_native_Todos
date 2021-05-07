import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItems({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View  style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333"/>
        <Text  style={styles.itemText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderStyle: "dashed",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",

  },
  itemText:{
      marginLeft: 10,
      
  }
});

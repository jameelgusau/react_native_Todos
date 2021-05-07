import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "OpenNew", label: "Open New" },
    { id: "ZoomIn", label: "Zoom In" },
    { id: "ZoomOut", label: "Zoom Out" },
    { id: "OriginalView", label: "Original View" },

  ]);

  const handlePress = id => {
    console.log(id);
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id != id);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodo => {
        return [{ label: text, id: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Oops", "Todo most be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log("haha")
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,

    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});

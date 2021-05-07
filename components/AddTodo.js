import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function AddTodo({submitHandler}) {
    const [ text, setTest ] = useState('')
    const changeHandle =(txt)=>{
        setTest(txt)
    }

    return (
        <View>
            <TextInput style= {styles.input}placeholder="new todo..." onChangeText={changeHandle}/>
            <Button title="ADD TODO" onPress={()=> submitHandler(text)} color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    }
})

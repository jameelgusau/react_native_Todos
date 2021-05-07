import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TodoItems({item, handlePress}) {
    return (
        <TouchableOpacity onPress={()=>handlePress(item.id)}>
            <Text style={styles.item }>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderStyle: 'dashed',
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 10,
        

    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        paddingTop: 40,
        alignItems: 'flex-end',
        backgroundColor: "#ddd",
        justifyContent: 'space-around'
    },
    boxOne:{
        flex: 2,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo:{
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree:{
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour:{
        flex: 3,
        backgroundColor: 'skyblue',
        padding: 40,
    }
})
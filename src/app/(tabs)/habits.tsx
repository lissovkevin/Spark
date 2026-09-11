import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function habits() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Habits</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
})
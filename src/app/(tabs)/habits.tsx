import { StyleSheet, Text, View } from 'react-native'

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
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#111827',
    },
})
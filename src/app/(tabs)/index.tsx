import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Welcome to Spark</Text>
            <Text style={styles.underline}>Ignite your habits. Fuel your future.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: "center",
    },
    Text: {
        fontSize: 40,
        color: '#111827'
    },
    underline: {
        color: '#6B7280'
    },
    link: {
        color: 'black',
        fontSize: 20,
    }
});

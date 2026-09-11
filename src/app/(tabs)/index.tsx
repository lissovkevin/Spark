import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"

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
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        fontSize: 40,
    },
    underline: {
        color: '#808080'
    },
    link: {
        color: 'black',
        fontSize: 20,
    }
});

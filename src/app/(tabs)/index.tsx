import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../themes/colors';

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
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    Text: {
        fontSize: 40,
        color: colors.textPrimary,
    },
    underline: {
        color: colors.textSecondary,
    },
});

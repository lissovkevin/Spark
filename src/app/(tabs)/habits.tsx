import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../themes/colors';

export default function habits() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Habits</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.textPrimary,
    },
});

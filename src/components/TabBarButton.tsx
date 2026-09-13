import { colors } from '@/themes/colors';
import { PlatformPressable } from 'expo-router/react-navigation';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { icon } from '../constants/icon';

type TabBarButtonProps = {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string;
};

export default function TabBarButton({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    color,
    label,
}: TabBarButtonProps) {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {
            duration: 350,
        });
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

        const top = interpolate(scale.value, [0, 1], [0, 9]);

        return {
            transform: [
                {
                    scale: scaleValue,
                },
            ],
            top,
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);

        return {
            opacity,
        };
    });

    return (
        <PlatformPressable onPress={onPress} onLongPress={onLongPress} style={styles.tabbarItem}>
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                    color: isFocused ? '#fff' : colors.textPrimary,
                })}
            </Animated.View>
            <Animated.Text
                style={[
                    { color: isFocused ? colors.primary : colors.textPrimary, fontSize: 12 },
                    animatedTextStyle,
                ]}
            >
                {label}
            </Animated.Text>
        </PlatformPressable>
    );
}

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
});

import { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { useLinkBuilder } from 'expo-router/react-navigation';
import { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { colors } from '../themes/colors';
import TabBarButton from './TabBarButton';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { buildHref } = useLinkBuilder();

    const [dimensions, setDimensions] = useState({ heigth: 20, width: 100 });

    const buttonWidth = dimensions.width / state.routes.length;

    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            heigth: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        });
    };

    const tabPositionX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPositionX.value }],
        };
    });

    return (
        <View onLayout={onTabBarLayout} style={styles.tabbar}>
            <Animated.View
                style={[
                    animatedStyle,
                    {
                        position: 'absolute',
                        backgroundColor: colors.primary,
                        borderRadius: 30,
                        marginHorizontal: 12,
                        height: dimensions.heigth - 15,
                        width: buttonWidth - 25,
                    },
                ]}
            />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    tabPositionX.value = withSpring(buttonWidth * index, { duration: 750 });

                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? '#fff' : colors.textPrimary}
                        label={label}
                    />
                    // <PlatformPressable
                    //     key={route.key}
                    //     href={buildHref(route.name, route.params)}
                    //     accessibilityState={isFocused ? { selected: true } : {}}
                    //     accessibilityLabel={options.tabBarAccessibilityLabel}
                    //     testID={options.tabBarButtonTestID}
                    //     onPress={onPress}
                    //     onLongPress={onLongPress}
                    //     style={styles.tabbarItem}
                    // >
                    //     {icon[route.name]({
                    //         color: isFocused ? colors.primary : colors.textPrimary
                    //     })}
                    //     <Text style={{ color: isFocused ? colors.primary : colors.textPrimary }}>
                    //         {label}
                    //     </Text>
                    // </PlatformPressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    // tabbarItem: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     gap: 5,
    // },
});

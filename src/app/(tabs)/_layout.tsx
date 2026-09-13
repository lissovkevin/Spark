import { TabBar } from '@/components/TabBar';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '../../themes/colors';

export default function TabLayout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: colors.surface,
                    },
                    headerTintColor: colors.primary,
                    headerTitleStyle: {
                        color: colors.textPrimary,
                        fontWeight: '600',
                        fontSize: 20,
                    },
                    headerShadowVisible: false,
                }}
            />
            <Tabs.Screen
                name="habits"
                options={{
                    title: 'Habits',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'flame-sharp' : 'flame-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: colors.surface,
                    },
                    headerTintColor: colors.primary,
                    headerTitleStyle: {
                        color: colors.textPrimary,
                        fontWeight: '600',
                        fontSize: 20,
                    },
                    headerShadowVisible: false,
                }}
            />
        </Tabs>
    );
}

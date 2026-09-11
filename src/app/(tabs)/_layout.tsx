import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                    headerStyle: {
                        backgroundColor:  '#FFFFFF'
                    },
                    headerTintColor: '#4F46E5',
                    headerTitleStyle: {
                        color: '#111827',
                        fontWeight: '600',
                        fontSize: 20,
                    },
                    headerShadowVisible: false
                }} />
            <Tabs.Screen
                name="habits"
                options={{
                    title: 'Habits',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'flame-sharp' : 'flame-outline'} color={color} size={24} />
                    )
                }} />
        </Tabs>

    )
}
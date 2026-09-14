import { collection, onSnapshot, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { db } from '../../lib/firebase';
import { colors } from '../../themes/colors';

interface Habit {
    id: string;
    name: string;
    description: string;
    color: string;
    createdAt?: Timestamp;
    completedDates: string[];
    graceDays: number;
}

export default function Habits() {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const colRef = collection(db, 'habits');

        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const habitList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Habit, 'id'>),
            }));
            setHabits(habitList);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item } : { item: Habit }) => {
        return (
            <Text>{item.name}</Text>
        )
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <FlatList
                    data={habits}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ListEmptyComponent={
                        <View>
                            <Text>No habits</Text>
                        </View>
                    }
                />
            )}
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

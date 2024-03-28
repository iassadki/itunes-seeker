// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import LikedSongsScreen from './LikedSongsScreen';
import SongScreen from './SongScreen';

const songs = [
    { id: 1, title: 'Song 1' },
    { id: 2, title: 'Song 2' },
    { id: 3, title: 'Song 3' },
    // Ajoutez plus de chansons si nécessaire
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured Songs</Text>
            <FlatList
                data={songs}
                renderItem={({ item }) => (
                    <View style={styles.songItem}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button
                title="Go to Song Infos"
                onPress={() => navigation.navigate('SongScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    songItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 10,
        borderRadius: 5,
    },
});

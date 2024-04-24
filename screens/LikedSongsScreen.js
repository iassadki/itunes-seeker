// LikedSongsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const songs = [
    { id: 1, title: 'Song 1' },
    { id: 2, title: 'Song 2' },
    { id: 3, title: 'Song 3' },
    // Ajoutez plus de chansons si nécessaire
];

export default function LikedSongsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Liked songs</Text>
            <FlatList
                data={songs}
                renderItem={({ item }) => (
                    <View style={styles.songItem}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
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

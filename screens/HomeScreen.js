import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SongScreen from './SongScreen';

const songs = [
    { id: 1, title: 'Song 1' },
    { id: 2, title: 'Song 2' },
    { id: 3, title: 'Song 3' },
];

export default function HomeScreen() {
    const navigation = useNavigation();

    const handleSongPress = (songId) => {
        navigation.navigate('SongScreen', { songId });
    };

    const renderSongItem = ({ item }) => (
        <TouchableOpacity
            style={styles.songItem}
            onPress={() => handleSongPress(item.id)}
        >
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featured Songs</Text>
            <FlatList
                data={songs}
                renderItem={renderSongItem}
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

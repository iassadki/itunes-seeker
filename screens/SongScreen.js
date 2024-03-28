import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import LikedSongsScreen from './LikedSongsScreen';

export default function SongScreen() {
    return (
        <View style={styles.container}>
            <Text>Song Infos Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});

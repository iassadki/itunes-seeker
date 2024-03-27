import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LikedSongsScreen() {
    return (
        <View style={styles.container}>
            <Text> Liked songs </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', // changer 'color' à 'backgroundColor'
        justifyContent: 'center',
    },
});

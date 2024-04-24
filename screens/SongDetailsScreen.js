import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SongDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Song Details Screen</Text>
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

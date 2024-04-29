import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MusicDetails from '../components/MusicDetails';

export default function SongDetailsScreen({ route }) {
    const { music } = route.params;

    return (
        // Afficher les détails de la musique
        <View style={styles.container}>
            <MusicDetails music={music} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

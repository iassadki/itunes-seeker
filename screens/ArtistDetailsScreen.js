import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ArtistDetails from '../components/ArtistDetails';

export default function ArtistDetailsScreen({ route }) {
    const { artist } = route.params; // Extraire l'artiste de la route

    return (
        // Afficher les détails de l'artiste
        <View style={styles.container}>
            <ArtistDetails artist={artist} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

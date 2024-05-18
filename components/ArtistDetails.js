import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArtistDetails = ({ artist }) => {
    return (
        // Afficher les détails de l'artiste
        <View style={styles.container}>
            <Image source={require('../assets/artistImage.png')} style={styles.image} />
            <View style={styles.artistDetails}>
                <Text style={styles.artistArtist}>{artist.artistName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 350,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 5,
        marginBottom: 10,
    },
    artistDetails: {
        marginTop: 10,
        marginLeft: 5,
    },
    artistArtist: {
        fontSize: 23,
        fontWeight: '600',
        color: '#DCDCDC',
    },
});

export default ArtistDetails;

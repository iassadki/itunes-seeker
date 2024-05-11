import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ArtistItem = ({ artist, onPress, onLike }) => {
    return (
        // Afficher les détails de l'artiste
        <TouchableOpacity style={styles.artist} onPress={onPress}>
            <Image source={require('../assets/artistImage.png')} style={styles.image} />
            <View style={styles.artistDetails}>
                <Text style={styles.artistArtist}>{artist.artistName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    artist: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 5,
    },
    artistArtist: {
        fontSize: 15,
        fontWeight: '700', 
    },
    likeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default ArtistItem;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MusicItem = ({ music, onPress, onLike }) => {
    return (
        // Afficher les détails de la musique
        <TouchableOpacity style={styles.music} onPress={onPress}>
            <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
            <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>{music.trackName}</Text>
                <Text style={styles.musicArtist}>{music.artistName}</Text>
                <Text style={styles.musicAlbum}>{music.collectionName}</Text>
            </View>
            <TouchableOpacity style={styles.likeButton} onPress={onLike}>
                <FontAwesome name={music.liked ? 'heart' : 'heart-o'} size={30} color={music.liked ? 'red' : 'black'} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    music: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 5,
    },
    musicTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    musicArtist: {
        fontSize: 15,
        fontWeight: '500',
    },
    musicAlbum : {
        fontSize: 15,
        fontWeight: '400',
    },
    musicDetails: {
        fontSize: 15,
        flex: 1,
        marginLeft: 10,
        fontWeight: '500',
    },
    likeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
});

export default MusicItem;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MusicDetails = ({ music }) => {

    // Initialiser l'état liked de la musique
    const [musicList, setMusicList] = useState([]);

    // Fonction pour gérer le like
    const handleLike = (musicIndex) => {
        // Mettre à jour l'état liked de la musique
        setMusicList(prevMusicList => {
            const updatedMusicList = [...prevMusicList]; // Copie de la liste de musique
            updatedMusicList[musicIndex] = { ...updatedMusicList[musicIndex], liked: !updatedMusicList[musicIndex].liked }; // Inversion de l'état liked
            return updatedMusicList; // Mise à jour de la liste de musique
        });
    };

    return (
        // Afficher les détails de la musique
        <View style={styles.container}>
            <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
            <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>{music.trackName}</Text>
                <Text style={styles.musicArtist}>{music.artistName}</Text>
                <Text style={styles.musicAlbum}>{music.collectionName}</Text>
            </View>
            {/* <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
                <FontAwesome name={music.liked ? 'heart' : 'heart-o'} size={30} color={music.liked ? 'red' : 'black'} />
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        marginBottom: 300,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 5,
        marginBottom: 10,
    },
    musicDetails: {
        marginTop: 10,
        marginLeft: 5,
    },
    musicTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DCDCDC',
    },
    musicArtist: {
        fontSize: 15,
        fontWeight: '500',
        color: '#B9B9B9',
    },
    musicAlbum: {
        fontSize: 15,
        fontWeight: '400',
        color: '#B9B9B9',
    },
    likeButton: {
        marginTop: 10,
        marginLeft: 5,
    },
});

export default MusicDetails;

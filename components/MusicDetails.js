import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importation de Feather pour utiliser les icônes

const MusicDetails = ({ music }) => {
    const handleLike = () => {
        // Logique pour gérer le like
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
            <View style={styles.musicDetails}>
                <Text style={styles.textTitle}>{music.trackName}</Text>
                <Text style={styles.text}>{music.artistName}</Text>
                <Text style={styles.text}>{music.collectionName}</Text>
            </View>
            <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
                <Feather name="heart" size={24} color="red" />
            </TouchableOpacity>
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
        // alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
    },
    likeButton: {
        marginTop: 10,
        marginLeft: 5,
    },
});

export default MusicDetails;

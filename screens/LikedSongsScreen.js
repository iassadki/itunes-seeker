import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import MusicItem from '../components/MusicItem';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LikedSongsScreen({ navigation, props }) {
    const [likedSongs, setLikedSongs] = useState([]); // Ajout d'un état pour les chansons aimées

    useEffect(() => {
        const Like = async () => {
            const songs = await AsyncStorage.getItem('likedSongs');

            if (songs !== null) {
                setLikedSongs(JSON.parse(songs));
            }
        };

        Like(); // Appeler la fonction Like
    }, [likedSongs]);

    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music }); // Naviguer vers l'écran de détails de la chanson lors du clic sur une chanson
    };

    // methode handleDelete, pour supprimer une muqique de la liste des chansons aimées quand on clique sur le bouton
    const handleDelete = async (music) => {
        // Récupérer la liste actuelle des chansons aimées
        const likedSongsString = await AsyncStorage.getItem('likedSongs');
        const likedSongs = likedSongsString ? JSON.parse(likedSongsString) : [];

        // Mettre à jour l'état likedSongs pour supprimer la musique aimée
        const updatedLikedSongs = likedSongs.filter(item => item.trackId !== music.trackId);
        AsyncStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs)); // Stocker les chansons aimées dans AsyncStorage
        setLikedSongs(updatedLikedSongs);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Liked Songs</Text>
                {likedSongs.map((music, index) => (
                    <MusicItem
                        key={index}
                        music={music}
                        onPress={() => handlePress(music)}
                        onDelete={() => handleDelete(music)}
                        liked={true}
                        showLike={false}
                        showTrash={true}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
        padding: 10,
    },
    pageTitle: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white',
    },
});
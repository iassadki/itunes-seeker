import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Button } from 'react-native';
import MusicItem from '../components/MusicItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide
    const [likedSongs, setLikedSongs] = useState([]); // Ajout d'un état pour les chansons aimées

    useEffect(() => {
        // Fonction pour récupérer la musique
        const fetchMusic = async () => {
            try {
                const response = await fetch('https://itunes.apple.com/search?media=music&term=djsnake');
                const data = await response.json(); // Convertir la réponse en JSON
                const musicWithLikeState = data.results.map(music => ({ ...music, liked: false })); // Ajouter un état liked à chaque musique
                setMusicList(musicWithLikeState); // Mettre à jour l'état musicList avec les données de musique
            } catch (error) {
                console.error(error);
            }
        };
        fetchMusic();
    }, []);

    // Fonction pour gérer le clic sur le bouton de like
    const handleLike = async (music) => {
        // Mettre à jour l'état de la musique likée
        const updatedMusicList = musicList.map(item =>
            item.trackId === music.trackId ? { ...item, liked: !item.liked } : item
        );
        setMusicList(updatedMusicList);

        // Récupérer la liste actuelle des chansons aimées
        const likedSongsString = await AsyncStorage.getItem('likedSongs');
        const likedSongs = likedSongsString ? JSON.parse(likedSongsString) : [];

        // Vérifier si la musique est déjà aimée
        const isLiked = likedSongs.some(item => item.trackId === music.trackId);

        // Mettre à jour l'état likedSongs pour ajouter ou supprimer la musique aimée
        if (isLiked) {
            const updatedLikedSongs = likedSongs.filter(item => item.trackId !== music.trackId);
            AsyncStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs)); // Stocker les chansons aimées dans AsyncStorage
            setLikedSongs(updatedLikedSongs);
        } else {
            const updatedLikedSongs = [...likedSongs, { ...music, liked: true }];
            AsyncStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs)); // Stocker les chansons aimées dans AsyncStorage
            setLikedSongs(updatedLikedSongs);
        }
    };

    // Fonction pour gérer le clic sur un élément de musique
    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    };

    // Afficher les chansons aimées dans la console
    useEffect(() => {
        console.log("Liked Songs :", likedSongs.map(song => song.trackName));
    }, [likedSongs]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Featured</Text>
                {musicList.map((music, index) => (
                    <MusicItem
                        key={index}
                        music={music}
                        onPress={() => handlePress(music)}
                        onLike={() => handleLike(music)}
                    />
                ))}
                <Button
                    title="View Liked Songs"
                    onPress={() => navigation.navigate('LikedSongsScreen', { likedSongs: [...likedSongs] })}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

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

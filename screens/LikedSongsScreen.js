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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Liked Songs</Text>
                {likedSongs.map((music, index) => (
                    <MusicItem
                        key={index}
                        music={music}
                        onPress={() => handlePress(music)}
                        onLike={() => { }}
                        liked={true}
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
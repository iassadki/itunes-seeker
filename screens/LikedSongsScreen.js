// LikedSongsScreen.js
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function LikedSongsScreen() {
    const [musicList, setMusicList] = useState([]);
    const [likedMusic, setLikedMusic] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                // search music
                const response = await fetch('https://itunes.apple.com/search?media=music&term=thylacine');
                const data = await response.json();
                setMusicList(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        // Appel de la fonction fetchMusic pour récupérer les musiques
        fetchMusic();
    }, []);

    const handleLike = (music) => {
        setLikedMusic([...likedMusic, music]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Liked Songs</Text>
                {musicList.map((music, index) => (
                    <TouchableOpacity key={index} style={styles.music} onPress={() => navigation.navigate('SongDetailsScreen', { music })}>
                        <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
                        <View style={styles.musicDetails}>
                            <Text style={styles.text}>{music.trackName}</Text>
                            <Text style={styles.text}>{music.artistName}</Text>
                            <Text style={styles.text}>{music.collectionName}</Text>
                        </View>
                        <TouchableOpacity style={styles.likeButton} onPress={() => handleLike(music)}>
                            <Feather name="heart" size={24} color="red" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    pageTitle: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
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
    musicDetails: {
        flex: 1,
        marginLeft: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
    likeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
});

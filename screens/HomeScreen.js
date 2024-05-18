import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import MusicItem from '../components/MusicItem';
import MusicDetails from '../components/MusicDetails';

export default function HomeScreen({ navigation }) {

    // Initialize musicList with an empty array
    const [musicList, setMusicList] = useState([]);
    const [likedSongs, setLikedSongs] = useState([]); // Add state for liked songs

    // Fetch music list from iTunes API
    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await fetch('https://itunes.apple.com/search?media=music&term=djsnake');
                const data = await response.json();
                const musicWithLikeState = data.results.map(music => ({ ...music, liked: false }));
                setMusicList(musicWithLikeState);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMusic();
    }, []);

    // Handle liking a song
    const handleLike = (music) => {
        setMusicList(prevMusicList => {
            const updatedMusicList = [...prevMusicList];
            const index = updatedMusicList.findIndex(item => item.trackId === music.trackId);
            if (index !== -1) {
                updatedMusicList[index] = { ...updatedMusicList[index], liked: !updatedMusicList[index].liked };
                if (updatedMusicList[index].liked) {
                    setLikedSongs(prevLikedSongs => [...prevLikedSongs, updatedMusicList[index]]);
                } else {
                    setLikedSongs(prevLikedSongs => prevLikedSongs.filter(song => song.trackId !== music.trackId));
                }
            }
            return updatedMusicList;
        });
    };

    // Handle navigation to song details page
    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    };

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
});

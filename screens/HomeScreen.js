import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import MusicItem from '../components/MusicItem';
import MusicDetails from '../components/MusicDetails';

export default function HomeScreen({ navigation }) {

    // Initialiser l'état musicList avec un tableau vide
    const [musicList, setMusicList] = useState([]);

    // Récupérer la liste de musique depuis l'API iTunes
    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await fetch('https://itunes.apple.com/search?media=music&term=nekfeu');
                const data = await response.json();
                // Ajouter l'état liked à chaque élément de musique
                const musicWithLikeState = data.results.map(music => ({ ...music, liked: false }));
                setMusicList(musicWithLikeState);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMusic();
    }, []);

    // Fonction pour gérer le like
    const handleLike = (index) => {
        // Vérifier si l'index est valide
        if (index >= 0 && index < musicList.length) {
            setMusicList(prevMusicList => {
                const updatedMusicList = [...prevMusicList];
                updatedMusicList[index] = { ...updatedMusicList[index], liked: !updatedMusicList[index].liked };
                return updatedMusicList;
            });
            // Naviguer vers LikedSongsScreen en passant (en récupérant) les données de la musique aimée
            navigation.navigate('LikedSongsScreen', { likedMusic: musicList[index] });
        }
    };

    // Fonction pour gérer la navigation vers la page de détails de la musique
    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    };

    return (
        // Afficher la liste de musique
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Featured</Text>
                {musicList.map((music, index) => (
                    <MusicItem
                        key={index}
                        music={music}
                        onPress={() => handlePress(music)} // Passer la musique à handlePress
                        onLike={() => handleLike(index)} // Passer l'index à handleLike
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

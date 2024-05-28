import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import MusicItem from '../components/MusicItem';
import { useSelector } from 'react-redux';

export default function LikedSongsScreen({ navigation }) {
    // Utilisation de useSelector pour accéder à la liste des chansons aimées dans le store Redux
    const likedSongs = useSelector(state => state.likedSongs);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("LikedSongsScreen : ", likedSongs.map(song => song.trackName));
        }, 10000); // Actualise la fonction avec une intervalle

        return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
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
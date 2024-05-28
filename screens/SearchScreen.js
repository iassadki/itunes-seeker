import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import MusicItem from '../components/MusicItem';
import ArtistItem from '../components/ArtistItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchScreen({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState(''); // Initialiser l'état searchPhrase avec une chaîne vide
    const [artistList, setArtistList] = useState([]); // Initialiser l'état de artistList avec un tableau vide
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide
    const [searchOption, setSearchOption] = useState('Music'); // Initialiser l'état searchOption avec la valeur par défaut 'Artist'
    const [likedSongs, setLikedSongs] = useState([]); // Ajout d'un état pour les chansons aimées

    useEffect(() => {
        if (searchPhrase.trim() !== '') {
            setTimeout(() => {
                handleSearch();
            }, 1500);
        }
    }, [searchPhrase, searchOption]);

    const handleSearch = async () => {
        try {
            if (searchOption === 'Artist') {
                const response = await fetch(`https://itunes.apple.com/search?entity=musicArtist&term=${searchPhrase}`);
                const data = await response.json();
                setArtistList(data.results);
                setMusicList([]); // Réinitialiser la liste de musique lorsque la recherche par artiste est effectuée
            } else if (searchOption === 'Music') {
                const response = await fetch(`https://itunes.apple.com/search?term=${searchPhrase}&entity=song`);
                const data = await response.json();
                setMusicList(data.results);
                setArtistList([]); // Réinitialiser la liste d'artistes lorsque la recherche de musique est effectuée
            }
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleSearchOptionChange = (option) => {
        setSearchOption(option);
        setSearchPhrase(''); // Réinitialiser la phrase de recherche lorsque l'option de recherche est changée
    };

    const handlePressArtist = (artist) => {
        navigation.navigate('ArtistDetailsScreen', { artist });
    }

    const handlePressMusic = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    }

    return (
        <View style={styles.container}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                onChangeText={setSearchPhrase}
                searchOption={searchOption}
                setSearchOption={handleSearchOptionChange}
            />
            <Text style={styles.searchFilter}>Recherche sur {searchOption}</Text>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {searchOption === 'Artist' && artistList.map((artist, index) => (
                        <ArtistItem
                            key={index}
                            artist={artist}
                            onPress={() => handlePressArtist(artist)}
                        />
                    ))}
                    {searchOption === 'Music' && musicList.map((music, index) => (
                        <MusicItem
                            key={index}
                            music={music}
                            onPress={() => handlePressMusic(music)}
                            onLike={() => handleLike(music)}
                            showLike={true}
                            showTrash={false}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
        padding: 10,
    },
    searchFilter: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10,
    },
});

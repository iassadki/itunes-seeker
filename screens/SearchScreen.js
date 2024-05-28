import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import MusicItem from '../components/MusicItem';
import ArtistItem from '../components/ArtistItem';

export default function SearchScreen({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState(''); // Initialiser l'état searchPhrase avec une chaîne vide
    const [artistList, setArtistList] = useState([]); // Initialiser l'état de artistList avec un tableau vide
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide
    const [searchOption, setSearchOption] = useState('Artist'); // Initialiser l'état searchOption avec la valeur par défaut 'Artist'
    const [likedSongs, setLikedSongs] = useState([]); // Add state for liked songs

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
    const handleLike = (music) => {
        // Mettre à jour l'état musicList pour ajouter ou supprimer la musique aimée
        setMusicList(prevMusicList => {
            const updatedMusicList = [...prevMusicList];
            const index = updatedMusicList.findIndex(item => item.trackId === music.trackId);
            // Si la musique est trouvée, mettre à jour l'état liked et ajouter ou supprimer la musique de la liste des chansons aimées
            if (index !== -1) {
                updatedMusicList[index] = { ...updatedMusicList[index], liked: !updatedMusicList[index].liked };
                // Mettre à jour l'état likedSongs pour ajouter ou supprimer la musique aimée
                if (updatedMusicList[index].liked) {
                    setLikedSongs(prevLikedSongs => [...prevLikedSongs, updatedMusicList[index]]);
                // Si la musique est déjà aimée, la retirer de la liste des chansons aimées
                } else {
                    setLikedSongs(prevLikedSongs => prevLikedSongs.filter(song => song.trackId !== music.trackId));
                }
            }
            return updatedMusicList;
        });
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

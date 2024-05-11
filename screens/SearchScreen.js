import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import MusicItem from '../components/MusicItem';
import ArtistItem from '../components/ArtistItem';

export default function SearchScreen({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState(''); // Initialiser l'état searchPhrase avec une chaîne vide
    const [artistList, setArtistList] = useState([]); // Initialiser l'état de artistList avec un tableau vide
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide
    const [searchOption, setSearchOption] = useState('Artist'); // Initialiser l'état searchOption avec la valeur par défaut 'Artist'

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
        backgroundColor: 'white',
        padding: 10,
    },
});

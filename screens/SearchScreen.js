import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import MusicItem from '../components/MusicItem';

export default function SearchScreen({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState(''); // Initialiser l'état searchPhrase avec une chaîne vide
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide

    // Cette fonction gère la recherche de musique en fonction de la phrase de recherche
    const handleSearch = async () => {
        try {
            const response = await fetch(`https://itunes.apple.com/search?media=music&term=${searchPhrase}`);
            const data = await response.json();
            setMusicList(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    // Utilisation de useEffect pour appeler handleSearch lorsque searchPhrase change
    useEffect(() => {
        // Vérifier si la phrase de recherche n'est pas vide
        if (searchPhrase.trim() !== '') {
            // Exécuter handleSearch après un délai de 1500 millisecondes
            setTimeout(() => {
                handleSearch();
            }, 1500);
        }
    }, [searchPhrase]);

    // setTimeout(() => {
    //  fetchMusic();
    // }, 500);

    // Fonction pour gérer la navigation vers la page de détails de la musique
    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    };

    return (
        <View style={styles.container}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                onChangeText={searchPhrase => setSearchPhrase(searchPhrase)}
            />
            {/* <Button
                title='Rechercher'
                onPress={handleSearch}
            /> */}
            <SafeAreaView style={styles.container}>
                <ScrollView>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    musicListContainer: {
        marginTop: 20,
    },
});

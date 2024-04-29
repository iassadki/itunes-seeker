import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './HomeScreen';
import SearchBar from '../components/SearchBar';
import MusicItem from '../components/MusicItem';

export default function SearchScreen({ navigation }) {
    const [searchPhrase, setSearchPhrase] = useState(''); // Initialiser l'état searchPhrase avec une chaîne vide
    const [musicList, setMusicList] = useState([]); // Initialiser l'état musicList avec un tableau vide

    // Cette fonction gère la recherche de musique en fonction de la phrase de recherche
    async function handleSearch() {
        try {
            const response = await fetch(`https://itunes.apple.com/search?media=music&term=${searchPhrase}`);
            const data = await response.json();
            setMusicList(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    // Fonction pour gérer la navigation vers la page de détails de la musique
    const handlePress = (music) => {
        navigation.navigate('SongDetailsScreen', { music });
    };

    return (
        <View style={styles.container}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
            />
            <Button
                title='Rechercher'
                onPress={handleSearch}
            />
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

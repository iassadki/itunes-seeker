import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {

    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                // search music
                const response = await fetch('https://itunes.apple.com/search?media=music&term=djsnake');
                const data = await response.json();
                setMusicList(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        // Appel de la fonction fetchMusic pour récupérer les musiques
        fetchMusic();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Liste de musiques depuis l'API iTunes :</Text>
                {musicList.map((music, index) => (
                    <View key={index}>
                        <Text>Titre : {music.trackName}</Text>
                        <Text>Artiste : {music.artistName}</Text>
                        <Text>Album : {music.collectionName}</Text>
                        <Text>Type : {music.kind}</Text>
                        <Text>-----------------------</Text>
                    </View>
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
});

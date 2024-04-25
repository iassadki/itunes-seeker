import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import MusicItem from '../components/MusicItem';

export default function HomeScreen({ navigation }) {
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await fetch('https://itunes.apple.com/search?media=music&term=thylacine');
                const data = await response.json();
                setMusicList(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMusic();
    }, []);

    const handleLike = (music) => {
        // Logic for handling liked music
    };

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

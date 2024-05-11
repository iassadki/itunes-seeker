import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MusicItem from '../components/MusicItem';

export default function LikedSongsScreen({ route }) {
    const [likedSongs, setLikedSongs] = useState([]);

    // useEffect(() => {
    // 
    // }, []); // Aucune dépendance pour que cela ne se déclenche qu'une seule fois

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Liked Songs</Text>
                {likedSongs.map((music, index) => (
                    <MusicItem
                        key={index}
                        music={music}
                        onPress={() => { }}
                        onLike={() => { }}
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
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MusicDetails from '../components/MusicDetails';
import MusicItem from '../components/MusicItem';

export default function LikedSongsScreen({ route }) {
    // const [likedMusic, setLikedMusic] = useState([]);
    // const navigation = useNavigation();
    // const { likedMusic } = route.params;

    // Fonction pour gérer le like
    const handleLike = (music) => {
        // Ajouter la musique à la liste des musiques aimées
        // setLikedMusic([...likedMusic, music]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.pageTitle}>Liked Songs</Text>
                {/* <TouchableOpacity style={styles.music} onPress={() => handleLike(likedMusic)}> */}
                    {/* <MusicItem music={likedMusic} /> */}
                {/* </TouchableOpacity> */}
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
    music: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 5,
    },
    musicDetails: {
        flex: 1,
        marginLeft: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
    likeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
});

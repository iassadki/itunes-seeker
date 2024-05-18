// SongDetailsScreen.js

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MusicDetails from '../components/MusicDetails';
import RatingItem from '../components/RatingItem';
import { Provider } from 'react-redux';
import store from '../redux/store';

const SongDetailsScreen = ({ route }) => {
    const { music } = route.params; // Récupérez la musique de la route
    const musicId = music.trackId; // Récupérez l'ID de la musique
    console.log("ID de la musique:", musicId); // Affichez l'ID de la musique

    return (
        // Fournissez le store à l'application, avec le composant Provider
        <Provider store={store}>
            <View style={styles.container}>
                <MusicDetails music={music} />
                <View style={styles.ratingItemContainer}>
                    <Text style={styles.ratingTitle}>Notez la musique !</Text>
                    <RatingItem musicId={music.trackId} />
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingTitle: {
        marginTop: 40,
        fontSize: 20,
        left: 55,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'left',
        width: '100%',
    },
    ratingItemContainer: {
        position: 'absolute',
        bottom: 200,
        left: 0,
        right: 50,
        alignItems: 'center',
    },
});

export default SongDetailsScreen;

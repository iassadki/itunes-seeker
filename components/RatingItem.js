// RatingItem.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRating, ratingSelector } from '../redux/rating/ratingSlice';

export default function RatingItem({ musicId }) {
    const dispatch = useDispatch(); // Utilisez useDispatch pour envoyer l'action setRating
    const rating = useSelector(state => ratingSelector(state, musicId)); // Utilisez le sélecteur pour récupérer le rating spécifique à chaque musique

    const handlePress = (index) => {
        dispatch(setRating({ musicId, rating: index + 1 }));
    };

    return (
        <View style={styles.container}>
            {[...Array(5)].map((_, index) => (
                <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                    <View style={[styles.dot, rating > index && styles.filledDot]} />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    dot: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 15,
        backgroundColor: '#0B0B0B',
        margin: 10,
    },
    filledDot: {
        backgroundColor: '#979797',
    },
});

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MusicItem = ({ music, onPress, onLike }) => {
    return (
        <TouchableOpacity style={styles.music} onPress={onPress}>
            <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
            <View style={styles.musicDetails}>
                <Text style={styles.text}>{music.trackName}</Text>
                <Text style={styles.text}>{music.artistName}</Text>
                <Text style={styles.text}>{music.collectionName}</Text>
            </View>
            <TouchableOpacity style={styles.likeButton} onPress={onLike}>
                <Feather name="heart" size={24} color="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default MusicItem;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MusicItem({ music, onPress, onLike, showTrash, showLike, onDelete }) {

    return (
        <TouchableOpacity style={styles.music} onPress={onPress}>
            <Image source={{ uri: music.artworkUrl100 }} style={styles.image} />
            <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>{music.trackName}</Text>
                <Text style={styles.musicArtist}>{music.artistName}</Text>
                <Text style={styles.musicAlbum}>{music.collectionName}</Text>
            </View>
            <View style={styles.containerButtons}>
                {showLike && (
                <TouchableOpacity style={styles.likeButton} onPress={() => onLike(music)}>
                    <FontAwesome name="heart" size={24} color={music.liked ? '#D51E1E' : '#424242'} />
                </TouchableOpacity>
                )}
                {showTrash && (
                    <TouchableOpacity style={styles.trashButton} onPress={() => onDelete(music)}>
                        <FontAwesome name="trash" size={24} color='#D51E1E' />
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    music: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#424242',
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 5,
    },
    musicTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#DCDCDC',
    },
    musicArtist: {
        fontSize: 15,
        fontWeight: '500',
        color: '#B9B9B9',
    },
    musicAlbum: {
        fontSize: 15,
        fontWeight: '400',
        color: '#B9B9B9',
    },
    musicDetails: {
        fontSize: 15,
        flex: 1,
        marginLeft: 10,
        fontWeight: '500',
        color: '#B9B9B9',
    },
    containerButtons: {
        flexDirection: 'row',
        marginRight: 1,
    },
    likeButton: {
        marginLeft: 20,
        width: 50,
        borderColor: '#424242',
    }, 
    trashButton: {
        marginLeft: 5,
        width: 50,
        borderColor: '#424242',
    },
});


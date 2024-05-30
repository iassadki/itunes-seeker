import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LikedSongsContext = createContext();

export const LikedSongsProvider = ({ children }) => {
    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        const fetchLikedSongs = async () => {
            const storedLikedSongsString = await AsyncStorage.getItem('likedSongs');
            const storedLikedSongs = storedLikedSongsString ? JSON.parse(storedLikedSongsString) : [];
            setLikedSongs(storedLikedSongs);
        };
        fetchLikedSongs();
    }, []);

    const updateLikedSongs = async (updatedLikedSongs) => {
        setLikedSongs(updatedLikedSongs); // Mettre à jour l'état local en premier
        await AsyncStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs)); // Ensuite, mettre à jour AsyncStorage
    };

    return (
        <LikedSongsContext.Provider value={{ likedSongs, updateLikedSongs }}>
            {children}
        </LikedSongsContext.Provider>
    );
};

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchPhrase, setSearchPhrase] = useState('');

    const handleSearch = () => {
        //todo Implementer logique pour la recherche
        console.log('Recherche en cours :', searchPhrase);
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        // margin: 15,
    },
});

export default SearchScreen;

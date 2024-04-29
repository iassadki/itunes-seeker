import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchOption, setSearchOption] = useState(''); // Initialiser l'état searchOption avec une chaîne vide

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionSelect = (option) => {
        setSearchOption(option);
        setSearchPhrase(searchPhrase); // Garder la phrase de recherche inchangée pour afficher la recherche actuelle
        toggleDropdown();
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                />
                {/* Dropdown button */}
                <TouchableOpacity onPress={toggleDropdown}>
                    <Feather
                        name="chevron-down"
                        size={20}
                        color="black"
                        style={{ marginLeft: 1 }}
                    />
                </TouchableOpacity>
            </View>
            {/* Dropdown menu */}
            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => handleOptionSelect("Track")}>
                        <Text style={styles.dropdownItem}>Track</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect("Artist")}>
                        <Text style={styles.dropdownItem}>Artist</Text>
                    </TouchableOpacity>
                </View>
            )}
            {/* Afficher l'option sélectionnée à côté de la barre de recherche */}
            {searchOption !== '' && (
                <View style={styles.selectedOption}>
                    <Text>{searchOption}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginBottom: 40,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%",
    },
    searchBar: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "70%",
    },
    dropdown: {
        position: "absolute",
        top: 30,
        right: 0,
        backgroundColor: "#d9dbda",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,        
        padding: 5,
        zIndex: 1,
    },
    dropdownItem: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 5,
    },
    selectedOption: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default SearchBar;

import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase, setSearchOption }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // État local pour le menu déroulant
    const [selectedOption, setSelectedOption] = useState(null); // État local pour l'option sélectionnée

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionSelect = (option) => {
        setSearchPhrase(searchPhrase); // Mettre à jour la phrase de recherche
        setSearchOption(option); // Mettre à jour le searchOption
        setSelectedOption(option); // Mettre à jour l'option sélectionnée
        toggleDropdown(); // Fermer le menu déroulant
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
                    <TouchableOpacity onPress={() => handleOptionSelect("Music")}>
                        <Text style={[styles.dropdownItem, selectedOption === "Music" && styles.selectedItem]}>Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect("Artist")}>
                        <Text style={[styles.dropdownItem, selectedOption === "Artist" && styles.selectedItem]}>Artist</Text>
                    </TouchableOpacity>
                </View>
            )}
            {/* Trait vertical */}
            <View style={styles.verticalLine}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginBottom: 70,
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
        right: 0.2,
        width: "30%",
        backgroundColor: "#d9dbda",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        // zIndex: 9999,
    },
    dropdownItem: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 5,
    },
    selectedItem: {
        backgroundColor: "lightblue", // Couleur de fond différente pour l'option sélectionnée
    },
    verticalLine: {
        height: "100%",
        width: 1,
        backgroundColor: "black",
        position: "absolute",
        right: "30%",
        top: 0,
    },
});

export default SearchBar;

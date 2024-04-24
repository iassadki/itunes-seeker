import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchOption, setSearchOption] = useState("Track");

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionSelect = (option) => {
        setSearchOption(option);
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
                    <Text style={styles.dropdownButton}>{searchOption}</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
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
    dropdownButton: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10,
    },
    dropdown: {
        position: "absolute",
        top: 70,
        right: 10,
        backgroundColor: "#d9dbda",
        borderRadius: 10,
        padding: 5,
        zIndex: 1,
    },
    dropdownItem: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 5,
    },
});

export default SearchBar;

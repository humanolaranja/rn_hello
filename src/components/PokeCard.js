import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export const PokeCard = ({ name, url }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Pokemon', { name, url })}>
            <View style={styles.cardContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginBottom: 16,
        padding: 32,
        borderRadius: 8,
        elevation: 3
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

import React, { useEffect, useCallback, useState } from 'react'
import { SafeAreaView, Text, Image, StyleSheet, View } from 'react-native'
import axios from 'axios'

const Pokemon = ({ route }) => {
    const { name, url } = route.params;

    const [pokemon, setPokemons] = useState()
    const [loading, setLoading] = useState(true)

    const getPokemon = useCallback(async () => {
        let response = await axios.get(url);
        setPokemons(response.data);
        setLoading(false)
    }, [])

    useEffect(() => {
        getPokemon()
    }, [getPokemon]);

    if (loading) {
        return (
            <SafeAreaView>
                <Text> Loading... </Text>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {name.toUpperCase()} </Text>
            <Image
                style={{ width: 400, height: 400 }}
                source={{ uri: pokemon.sprites.front_default }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: { 
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default Pokemon;

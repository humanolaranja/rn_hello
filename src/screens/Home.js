import React, { useState, useEffect, useCallback } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Platform,
    ScrollView
} from 'react-native';
import axios from 'axios';
import { PokeCard } from '../components/PokeCard';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemons = useCallback(async () => {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemons(response.data.results);
        setLoading(false)
    }, [])

    useEffect(() => {
        getPokemons()
    }, [getPokemons]);

    if (loading) {
        return (
            <SafeAreaView>
                <Text> Loading... </Text>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    {pokemons.map((pokemon) => {
                        return (<PokeCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />)
                    })}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Platform.OS === 'ios' ? '#FF4136' : '#FF851B',
    },
});

export default Home;

import React from 'react';
import {SafeAreaView, Platform, StyleSheet, ScrollView} from 'react-native';
import Pokemoncard from './components/Pokemoncard';
export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weakness: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weakness: ['Electric', 'Grass'],
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'), // Replace with the actual image path
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weakness: ['Ground'],
  };

  return (
    <SafeAreaView style={styles.newcontainer}>
      <ScrollView>
        <Pokemoncard {...charmanderData} />
        <Pokemoncard {...squirtleData} />
        <Pokemoncard {...bulbasaurData} />
        <Pokemoncard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newcontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 250,
    width: 250,
    // padding:10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'red',
  },
  boxshadow: {
    shadowColor: '#3333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 2.6,
    shadowRadius: 4,
  },
});

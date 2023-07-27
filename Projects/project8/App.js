/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import {PokemonDb} from './PokemonDb';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {PokemonDb.map(({name, type, powerMove, details, img}) => (
          <View style={[styles.pokemonCardContainer]}>
            <Text>{name}</Text>
            <Image
              style={styles.pokemonImg}
              source={{
                uri: img,
              }}
            />
            <View>
              <Text>{type}</Text>
              <Text>{powerMove}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8FFCE',
  },
  pokemonCardContainer: {
    margin: 20,
    backgroundColor: '#91C8E4',
    borderRadius: 20,
  },
  pokemonImg: {
    width: 250,
    height: 250,
  },
});

export default App;

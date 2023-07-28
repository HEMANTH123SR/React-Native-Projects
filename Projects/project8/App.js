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
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import {PokemonDb} from './PokemonDb';
import {TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {PokemonDb.map(({name, type, powerMove, details, img}) => (
          <View style={[styles.pokemonCardContainer]}>
            <Text style={styles.pokemonTitleName}>{name}</Text>
            <Image
              style={styles.pokemonImg}
              source={{
                uri: img,
              }}
            />
            <View style={styles.pokemonDetailsConatiner}>
              <Text style={styles.pokemonType}>{type}</Text>
              <Text style={styles.pokemonPower}>{powerMove}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.pokemonPower}>Click me</Text>
      </TouchableOpacity>
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
    marginTop: 10,
    width: 250,
    height: 250,
  },
  pokemonTitleName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 10,
  },
  pokemonType: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#EEEDED',
    width: 'auto',
    padding: 8,
    borderRadius: 30,
  },
  pokemonDetailsConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 100,
  },
  pokemonPower: {
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#EEEDED',
    width: 'auto',
    padding: 8,
    borderRadius: 30,
  },
});

export default App;

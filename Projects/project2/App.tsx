/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FlatCard from './components/FlatCard';
import ElavtedCards from './components/ElavtedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/contactList';
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.bgContainer}>
        <ScrollView>
          <FlatCard />
          <ElavtedCards />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#000000',
  },
});
export default App;

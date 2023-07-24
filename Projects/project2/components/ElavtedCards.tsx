/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ElavtedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElavtedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>me</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>To</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>More..</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>👀</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.colorText}>😘</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    padding: 12,
    fontSize: 27,
    color: '#6554AF',
    fontWeight: 'bold',
  },
  cardEleveted: {
    backgroundColor: '#CAD5E2',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  container: {
    padding: 8,
  },
  colorText: {
    color: '#A076F9',
  },
});

/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Vinland-Saga-Wallpaper-HD.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Thorfin</Text>
          <Text style={styles.cardAnime}>Vinland saga</Text>
          <Text style={styles.cardDescription}>
            Vinland Saga is a historical manga series set in 11th century Europe
          </Text>
          <Text style={styles.cardFooter}>Mang Reads</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 27,
    color: '#F11A7B',
    fontWeight: 'bold',
    padding: 12,
  },
  cardElevated: {},
  card: {
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 6,
    width: 360,
    height: 340,
    backgroundColor: '#000000',
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardAnime: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 6,
  },
  cardTitle: {
    paddingTop: 8,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 6,
  },
  cardFooter: {
    color: '#FFFFFF',
    fontSize: 12
    ,
    marginBottom: 6,
  },
});

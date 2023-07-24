/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            whats new i javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA34/l8bWxNY_DwMrowIr4rjV7KHpUHTIDpsRQCLcBGAsYHQ/s1600/js.png',
          }}
          style={styles.cardImg}
        />
        <View style={styles.bodyConatiner}>
          <Text numberOfLines={2}>
            Js stands for javascript , its the lanquage of the web , people hate
            js because its not like other strongly typed pogramming lanquage ,
            and people like me love js because , we can do anything we want with
            it
          </Text>
        </View>
        <View style={styles.fotterConatiner}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/getting-started')
            }>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    
  },
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImg: {
    height: 300,
    marginBottom: 100,
  },
  bodyConatiner: {},
  fotterConatiner: {},
});

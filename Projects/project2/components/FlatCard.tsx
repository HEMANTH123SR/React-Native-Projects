/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Card 4</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 27,
    padding: 12,

    color: '#3AA6B9',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#AED8CC',
  },
  cardThree: {
    backgroundColor: '#4A55A2',
  },
  cardFour: {
    backgroundColor: '#FF9B9B',
  },
});

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function AppP() {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event);
  };

  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Enter a Text</Text>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleChange}
          style={styles.textInput}
          multiline={true}
        />
        <View style={styles.textDisplayContainer}>
          <Text style={styles.textDisplay}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'black', // Set a valid color here
    fontSize: 28,
    fontWeight: '700',
    margin: 25,
  },
  textInput: {
    width: 320,
    minHeight: 100,
    fontSize: 22,
    backgroundColor: '#EEEEEE',
    padding: 10, // Add some padding for better appearance
  },
  textDisplayContainer: {
    marginTop: 50,
    padding: 20,
    minHeight: 100,
    width: 320,
    backgroundColor: '#1B9C85',
  },
  textDisplay: {
    fontSize: 22,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

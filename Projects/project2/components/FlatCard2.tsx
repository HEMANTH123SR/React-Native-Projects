/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

export default function FlatCard2() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textColor}>hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: '#F11A7B',
  },
});

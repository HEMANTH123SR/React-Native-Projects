/* eslint-disable prettier/prettier */
import React from "react";

import { View ,Text,StyleSheet} from "react-native";

const CurrencyButton=(props)=>{
return (
  <View style={styles.buttonContainer}>
    <Text style={styles.flag}>{props.flag}</Text>
    <Text style={styles.country}>{props.country}</Text>
  </View>
);
};


const styles = StyleSheet.create({
  buttonContainer:{
    alignItems:'center',
  },
  flag:{
    fontSize:28,
    color:'#ffffff',
    marginBottom:4,
  },
  country:{
    fontSize:14,
    color:"#ffffff",
  }
});

export default CurrencyButton;
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View,StyleSheet } from "react-native"
import {CountryInfoAndCurrency} from "./CountryDb"
import CountryComponent from "./Component/CountryComponent"
const App=()=>{
    return (
      <SafeAreaView>
        <CountryComponent
          countryName={CountryInfoAndCurrency[0].countryName}
          countryCurrencyName={CountryInfoAndCurrency[0].countryCurrencyName}
          CountryFlagImg={CountryInfoAndCurrency[0].countryFlagImg}
          countryCurrencyToOneInr={CountryInfoAndCurrency[0].countryCurrencyToOneInr}
        />
      </SafeAreaView>
    );
}

const style=StyleSheet.create({});

export default App;
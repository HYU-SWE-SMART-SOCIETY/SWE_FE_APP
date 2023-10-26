import React, {ReactElement} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LanguageButton } from "./components/languageButton";

export const LoginScreen = (): ReactElement | null => {
  return (
    <SafeAreaView>
      <View style={containerStyles.mainContainer}>
        <View style={containerStyles.headerContainer}>
          <LanguageButton />
        </View>
        <View style={containerStyles.bodyContainer}>
          <Text style={textStyles.title}>HOLME</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    //TODO: Add adjustment
  },
  bodyContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
  },
});

const textStyles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    margin: 30,
  },
});

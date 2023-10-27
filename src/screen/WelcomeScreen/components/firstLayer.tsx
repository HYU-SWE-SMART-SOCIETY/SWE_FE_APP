import {Animated, StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../../types/navigator';
import React, {ReactElement, useEffect, useRef} from 'react';
import {SystemText} from '../assets/strings';

export const FirstLayer = (): ReactElement | null => {
  const fadeAnimTitleVal = useRef(new Animated.Value(0)).current;
  const fadeAnimSubVal = useRef(new Animated.Value(0)).current;
  const fadeAnimPicVal = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimTitleVal, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnimSubVal, {
      toValue: 1,
      delay: 500,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnimPicVal, {
      toValue: 1,
      delay: 1000,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <View style={containerStyles.mainContainer}>
      <View style={containerStyles.headerContainer}>
        <Animated.Text style={[textStyles.title, {opacity: fadeAnimTitleVal}]}>
          {SystemText.Title}
        </Animated.Text>
        <Animated.Text style={[textStyles.subTitle, {opacity: fadeAnimSubVal}]}>
          {SystemText.SubTitle}
        </Animated.Text>
      </View>
      <Animated.Image
        style={[containerStyles.imageContainer, {opacity: fadeAnimPicVal}]}
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 30,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 180,
    justifyContent: 'space-around',
    paddingVertical: 35,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
  },
  imageContainer: {
    width: 220,
    height: 200,
    resizeMode: 'center',
    marginVertical: 100,
  },
});

const textStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#A6A3A3',
  },
});

import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../../types/navigator';
import React, {ReactElement, useEffect, useRef} from 'react';
import {SystemText} from '../assets/strings';

export const FirstLayer = (): ReactElement | null => {
  return (
    <View style={containerStyles.mainContainer}>
      <View style={containerStyles.headerContainer}>
        <Text style={textStyles.title}>{SystemText.Title}</Text>
        <Text style={textStyles.subTitle}>{SystemText.SubTitle}</Text>
      </View>
      <Image
        style={containerStyles.imageContainer}
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '70%',
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
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

const textStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#000000',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#A6A3A3',
    fontFamily: 'Inter',
  },
});

const indicatorStyle = (focused: boolean) =>
  StyleSheet.create({
    indicator: {
      marginVertical: 0,
      marginHorizontal: 4,
      backgroundColor: focused ? '#262626' : '#DFDFDF',
      width: 6,
      height: 6,
      borderRadius: 3,
    },
  });

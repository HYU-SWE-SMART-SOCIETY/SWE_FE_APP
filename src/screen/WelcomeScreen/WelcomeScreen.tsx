import React, {ReactElement, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WelcomeProps} from '../../types/navigator';
import {FirstLayer} from './components/firstLayer';

export const WelcomeScreen = ({
  route,
  navigation,
}: WelcomeProps): ReactElement | null => {
  //* Carousel Page Definition
  const fadeInAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      delay: 500,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <View style={containerStyles.mainContainer}>
      <FirstLayer />
      <Animated.View
        style={[containerStyles.footerContainer, {opacity: fadeInAnim}]}>
        <View style={containerStyles.indicatorContainer}>
          {Array.from({length: 4}, (_, idx) => idx).map(idx => (
            <View
              key={`indicator__${idx}`}
              style={indicatorStyle(idx == 0).indicator}
            />
          ))}
        </View>
        <View style={containerStyles.buttonSetContainer}>
          <TouchableOpacity
            style={containerStyles.buttonContainer}
            onPress={() => {
              navigation.replace('LoginMain'); //* Replace: Remove current page for the history
            }}>
            <Text style={textStyle.tag}>{'이미 알고 있어요!'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={containerStyles.buttonContainer}>
            <Text style={textStyle.tag}>{'다음'}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  footerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonSetContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 30,
  },
  buttonContainer: {
    display: 'flex',
    width: 135,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

const textStyle = StyleSheet.create({
  tag: {
    textAlign: 'center',
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.43,
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

import React, {ReactElement} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../types/navigator';
import window from '@react-navigation/native/lib/typescript/src/__mocks__/window';
import {Carousel} from '../../utils/components/carousel';
import {FirstLayer} from './components/firstLayer';

//* Constants
const screenWidthDimension: number = Math.round(Dimensions.get('window').width);

export const WelcomeScreen = ({
  route,
  navigation,
}: WelcomeProps): ReactElement | null => {
  //* Carousel Page Definition
  return (
    <View style={containerStyles.mainContainer}>
      <FirstLayer />
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
});

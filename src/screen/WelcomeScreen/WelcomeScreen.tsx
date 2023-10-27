import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../types/navigator';

export const WelcomeScreen = ({
  route,
  navigation,
}: WelcomeProps): ReactElement | null => {
  return (
    <View style={containerStyles.mainContainer}>
      <Text style={{color: '#000000'}}>TODO: WELCOME SCREEN</Text>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
  },
});

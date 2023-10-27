import {StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../../types/navigator';
import React, {ReactElement} from 'react';
import {SystemText} from '../assets/strings';

export const SecondLayer = ({
  route,
  navigation,
}: WelcomeProps): ReactElement | null => {
  return (
    <View style={containerStyles.mainContainer}>
      <View style={containerStyles.headerContainer}>
        <Text style={textStyles.title}>{SystemText.Title}</Text>
        <Text style={textStyles.subTitle}>{SystemText.SubTitle}</Text>
      </View>
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

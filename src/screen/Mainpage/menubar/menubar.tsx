import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Device} from './device/device';
import {Routine} from './routine/routine';
import {Holme} from './Holme/holme';
import {Report} from './report/report';
import {Myhome} from './myhome/myhome';
import {Image} from 'react-native';
import {MenubarProps} from '../../../types/props';

export const Menubar = ({
  route,
  navigation,
}: MenubarProps): ReactElement | null => {
  return (
    <SafeAreaView>
      <View style={containerStyles.bottomContainer}>
        <Image
          style={{
            width: 600,
            height: 2,
          }}
          source={require('./Line.png')}
        />
        <View style={containerStyles.buttonContainer2}>
          <Device />
          <Routine />
          <Holme route={route} navigation={navigation} />
          <Report route={route} navigation={navigation} />
          <Myhome />
        </View>
      </View>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  bottomContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  buttonContainer2: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-around', // Add space between the buttons
    margin: 10,
    marginTop: 25,
    marginHorizontal: 15,
  },
});

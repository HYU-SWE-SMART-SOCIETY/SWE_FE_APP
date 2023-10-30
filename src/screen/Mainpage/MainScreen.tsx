import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { MainProps } from '../../types/navigator';
import { AdddeviceButton } from './components/buttons/adddeviceButton';
import { RoomSettingButton } from './components/buttons/roomSettingButton';

export const MainScreen = ({
  route,
  navigation,
}: MainProps | null): ReactElement | null => {
  return (
    <SafeAreaView>
      <View style={containerStyles.mainContainer}>
        <View style={containerStyles.headerContainer}>
          <Text style={textStyles.title}>자취방 <RoomSettingButton /></Text>
        <View style={containerStyles.bodyContainer}>
          <Text style={textStyles.main}>공간에 연결된 기기</Text>
        </View>
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
    padding: 0,
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    height: 120,
    backgroundColor: '#C85858',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    //TODO: Add adjustment
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },
});

const textStyles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    textAlign: 'left',
    padding: 40,
  },
  main: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    marginLeft: 40,
  },
});
import React, {ReactElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {MainProps} from '../../types/props';
import {Adddevice} from './components/buttons/adddeviceButton';
import {RoomSettingButton} from './components/buttons/roomSettingButton';
import {Tv} from './components/devices/tv/tv';
import {Blind} from './components/devices/blind/blind';
import {Speaker} from './components/devices/speaker/speaker';
import {Water} from './components/devices/water/water';
import {Ac} from './components/devices/ac/ac';
import {Image} from 'react-native';
import {Sleep} from './components/routines/sleep/sleep';
import {Wakeup} from './components/routines/wakeup/wakeup';
import {Cleaning} from './components/routines/cleaning/cleaning';
import {Training} from './components/routines/training/training';
import {Menubar} from './menubar/menubar';
import {User} from '../../types/entity/user';

export const MainScreen: React.FC<MainProps> = ({
  route,
  navigation,
}: MainProps): ReactElement | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (user != route.params?.user) {
      //* Update User Info
      setUser(route.params?.user);
    }
  }, [route.params?.user]);

  useEffect(() => {
    //* User Changed
    if (user !== null) {
      const {name} = user;

      //* Android Toast
      ToastAndroid.showWithGravity(
        `${name} 님, 환영합니다.`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }, [user]);

  return (
    <SafeAreaView>
      <View style={containerStyles.headerContainer}>
        <Text style={textStyles.title}>
          자취방
          <RoomSettingButton />
        </Text>
        <View style={containerStyles.headerContainer2}>
          <Adddevice />
        </View>
      </View>
      <ScrollView>
        <View style={containerStyles.mainContainer}>
          <View style={containerStyles.bodyContainer}>
            <Text style={textStyles.main}>공간에 연결된 기기</Text>
            <View style={containerStyles.buttonContainer}>
              <Tv />
              <Blind />
            </View>
            <View style={containerStyles.buttonContainer}>
              <Speaker />
              <Water />
            </View>
            <View style={containerStyles.buttonContainer}>
              <Ac />
            </View>
          </View>
          <Image
            style={{
              alignSelf: 'center',
              width: 300,
            }}
            source={require('./assets/Line.png')}
          />
          <Text
            style={{
              fontSize: 11,
              fontWeight: 'normal',
              color: '#000000',
              marginLeft: 28,
              position: 'relative',
              marginTop: 25,
            }}>
            가능한 루틴들
          </Text>
          <View style={containerStyles.buttonContainer2}>
            <Sleep />
            <Wakeup />
            <Cleaning />
            <Training />
          </View>
        </View>
      </ScrollView>
      <View style={containerStyles.bottomContainer}>
        <Menubar />
      </View>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    backgroundColor: 'white',
    //TODO: Add adjustment
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    height: 110,
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
    marginTop: 25,
  },
  headerContainer2: {
    display: 'flex',
    height: 20,
    position: 'absolute',
    marginLeft: 270,
    marginTop: 77,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-around', // Add space between the buttons
    margin: 10,
  },
  buttonContainer2: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-around', // Add space between the buttons
    margin: 10,
    marginTop: 25,
    marginHorizontal: 15,
  },
  bottomContainer: {
    display: 'flex',
    width: '100%',
    height: '25%',
    backgroundColor: '#FFFFFF',
    padding: 0,
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
    marginLeft: 28,
    position: 'relative',
  },
});

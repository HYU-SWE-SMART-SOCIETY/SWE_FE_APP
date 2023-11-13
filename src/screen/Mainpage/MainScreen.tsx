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
    console.log(route.params?.cmdFlag);
  }, [route?.params?.cmdFlag]);

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          자취방
          <RoomSettingButton />
        </Text>
        <View style={styles.headerContainer2}>
          <Adddevice route={route} navigation={navigation} />
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.main}>공간에 연결된 기기</Text>
          <View style={styles.buttonContainer}>
            <Tv />
            <Blind />
          </View>
          <View style={styles.buttonContainer}>
            <Speaker />
            <Water />
          </View>
          <View style={styles.buttonContainer}>
            <Ac route={route} navigation={navigation} />
          </View>
          <Image
            style={styles.lineImage}
            source={require('./assets/Line.png')}
          />
          <Text style={styles.routinesTitle}>가능한 루틴들</Text>
          <View style={styles.buttonContainer2}>
            <Sleep />
            <Wakeup />
            <Cleaning />
            <Training />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Menubar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C85858',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    padding: 35,
    alignItems: 'center',
    height: 120,
  },
  headerContainer2: {
    position: 'relative',
    right: -20,
    top: 35,
  },
  main: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    marginLeft: 28,
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  lineImage: {
    alignSelf: 'center',
    width: 300,
  },
  routinesTitle: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    marginLeft: 28,
    marginTop: 25,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginHorizontal: 15,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    height: '15%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },
});

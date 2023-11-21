import React, {ReactElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {MainProps2} from '../../types/props';
import {Adddevice} from './components/buttons/adddeviceButton';
import {RoomSettingButton} from './components/buttons/roomSettingButton';
import {Image} from 'react-native';
import {Menubar} from './menubar/menubar';
import {User} from '../../types/entity/user';
import {Ac2} from './components/devices/ac/ac2';
import {Tv2} from './components/devices/tv/tv2';
import {Blind2} from './components/devices/blind/blind2';
import {Speaker2} from './components/devices/speaker/speaker2';
import {Water2} from './components/devices/water/water2';
import {Sleep2} from './components/routines/sleep/sleep2';
import {Wakeup2} from './components/routines/wakeup/wakeup2';
import {Cleaning2} from './components/routines/cleaning/cleaning2';
import {Training2} from './components/routines/training/training2';
import {BottomSheet2} from './components/modals/BottomSheet2';

export const MainScreen2: React.FC<MainProps2> = ({
  route,
  navigation,
}: MainProps2): ReactElement | null => {
  const [user, setUser] = useState<User | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openSyncSetting = () => setBottomSheetVisible(true);

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

  useEffect(() => {
    if (route.params?.cmdFlag == 1) {
      //* CMD: Open Modal while enter
      setBottomSheetVisible(true);
    }
  }, [route.params?.cmdFlag]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 170,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          onPress={openSyncSetting}>
          <Text style={styles.title}>한양 호텔 ITBT관 203호</Text>
          <RoomSettingButton />
        </TouchableOpacity>
        <View style={styles.headerContainer2}>
          <Adddevice route={route} navigation={navigation} />
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.main}>공간에 연결된 기기</Text>
          <View style={styles.buttonContainer}>
            <Tv2 />
            <Blind2 />
          </View>
          <View style={styles.buttonContainer}>
            <Speaker2 />
            <Water2 />
          </View>
          <View style={styles.buttonContainer}>
            <Ac2 route={route} navigation={navigation} />
          </View>
          <Image
            style={styles.lineImage}
            source={require('./assets/Line.png')}
          />
          <Text style={styles.routinesTitle}>가능한 루틴들</Text>
          <View style={styles.buttonContainer2}>
            <Sleep2 />
            <Wakeup2 />
            <Cleaning2 />
            <Training2 />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Menubar route={route} navigation={navigation} />
      </View>
      <BottomSheet2
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
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
    backgroundColor: '#041B93',
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
    height: '12%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },
});

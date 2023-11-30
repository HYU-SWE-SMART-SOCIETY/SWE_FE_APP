import React, {ReactElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AccontrolProps} from '../../../../../../types/props';
import {Image} from 'react-native';
import {Button1} from './buttons/button1';
import {Button2} from './buttons/button2';
import {Off} from './buttons/off';
import {Button3} from './buttons/button3';
import {Button4} from './buttons/button4';
import {Temup} from './buttons/temup';
import {Button5} from './buttons/button5';
import {Button6} from './buttons/button6';
import {Temdown} from './buttons/temdown';
import {Button7} from './buttons/button7';
import {Button8} from './buttons/button8';
import {Button9} from './buttons/button9';
import {Button10} from './buttons/button10';
import {Button11} from './buttons/button11';
import {Button12} from './buttons/button12';
import {Button14} from './buttons/button14';
import {Button15} from './buttons/button15';
import {Button13} from './buttons/button13';

export const AccontrolScreen = ({
  route,
  navigation,
}: AccontrolProps): ReactElement | null => {
  const [trigger, setTrigger] = useState(false);
  const [temp, setTemp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [airPurity, setAirPurity] = useState<string | null>(null);
  const [acState, setAcState] = useState('로딩 중...');

  useEffect(() => {
    if (!loading) {
      trigger ? setAcState('상태: 전원 켜짐') : setAcState('상태: 전원 꺼짐');
    }
    if (trigger) {
      setAirPurity('좋음');
    }
  }, [loading]);

  useEffect(() => {
    setTrigger(route.params.trigger);
    setTemp(route.params.temp);
    setLoading(false);
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Main2')}>
          <Image
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
              marginTop: 3,
            }}
            source={require('../Vector.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>에어컨</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.status}>{acState}</Text>
          <View style={styles.mainContainer}>
            <Image
              style={{
                marginRight: 10,
                marginTop: 3,
              }}
              source={require('../ac.png')}
            />
            <Text style={styles.temperatureStatus}>
              실내 온도:
              <Text style={styles.temperature}>{temp}</Text>
            </Text>
            <Image
              style={{
                width: 275,
              }}
              source={require('../Line.png')}
            />
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.temperatureStatus2}>
              실내 온도:
              <Text style={styles.temperature}>{temp}</Text>
            </Text>
            <Text style={styles.temperatureStatus2}>
              종합 청정도: <Text style={styles.temperature}>{airPurity}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button1 />
          <Off />
          <Button2 />
        </View>
        <View style={styles.buttonContainer}>
          <Button3 />
          <Temup />
          <Button4 />
        </View>
        <Text
          style={{
            fontSize: 11,
            textAlign: 'center',
            color: 'black',
            top: 407,
            alignSelf: 'center',
            position: 'absolute',
          }}>
          온도 조절
        </Text>
        <View style={styles.buttonContainer}>
          <Button5 />
          <Temdown />
          <Button6 />
        </View>
        <View style={styles.buttonContainer}>
          <Button7 />
          <Button8 />
          <Button9 />
        </View>
        <View style={styles.buttonContainer}>
          <Button10 />
          <Button11 />
          <Button12 />
        </View>
        <View style={styles.buttonContainer}>
          <Button13 />
          <Button14 />
          <Button15 />
        </View>
      </ScrollView>
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    height: '7%',
    marginTop: 40,
    marginLeft: 15,
  },
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 25,
  },
  statusContainer: {
    alignItems: 'flex-start',
    marginBottom: 35,
  },
  status: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#838383',
    marginLeft: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 40,
  },
  temperatureStatus: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#5C5C5C',
    marginVertical: 25,
  },
  temperatureStatus2: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#5C5C5C',
    marginLeft: 40,
    marginTop: 10,
  },
  temperature: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    fontFamily: 'Inter',
  },
});

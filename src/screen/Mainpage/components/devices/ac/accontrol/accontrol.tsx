import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AccontrolProps} from '../../../../../../types/navigator';
import {Image} from 'react-native';
import {Button1} from './buttons/button1';
import {Button2} from './buttons/button2';
import {Off} from './buttons/off';
import {Button3} from './buttons/button3';

export const AccontrolScreen = ({
  route,
  navigation,
}: AccontrolProps | null): ReactElement | null => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
          <Text style={styles.status}>상태: 전원 꺼짐</Text>
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
              <Text style={styles.temperature}> 29°C</Text>
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
              <Text style={styles.temperature}> 30°C</Text>
            </Text>
            <Text style={styles.temperatureStatus2}>
              종합 청정도: <Text style={styles.temperature}> 좋음</Text>
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
    justifyContent: 'center',
  },
  lineImage: {
    alignSelf: 'center',
    width: 300,
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
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    fontFamily: 'Inter',
  },
});

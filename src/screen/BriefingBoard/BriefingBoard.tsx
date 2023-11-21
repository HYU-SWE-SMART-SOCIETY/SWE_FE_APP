import React, {ReactElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BriefingProps} from '../../types/props';
import {Menubar} from '../Mainpage/menubar/menubar';

export const BriefingBoard = ({
  route,
  navigation,
}: BriefingProps): ReactElement | null => {
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
            source={require('./Vector.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>브리핑 보드</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={componentStyles.button}>
          <Text style={styles.buttontext}>종합</Text>
        </TouchableOpacity>
        <TouchableOpacity style={componentStyles.button}>
          <Text style={styles.buttontext}>연결</Text>
        </TouchableOpacity>
        <TouchableOpacity style={componentStyles.button}>
          <Text style={styles.buttontext}>대체</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={componentStyles.textBox}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              marginLeft: 5,
              marginTop: 5,
              color: 'black',
            }}>
            10/18 18:17
          </Text>
          <Text style={styles.result}>
            <Text
              style={{
                color: '#041B93',
                fontWeight: '700',
              }}>
              한양 호텔 ITBT관 203호
            </Text>
            에 성공적으로 기기들을 추가했습니다!
          </Text>
          <Text style={styles.result}>대체 불가능 한 기기: AI 정수기</Text>
          <Text style={styles.result}>대체 가능 한 기기: TV</Text>
          <Text style={styles.result}>
            자동 연결한 기기: 커튼, 에어컨, 스마트 스피커
          </Text>
        </View>
        <View style={componentStyles.textBox}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              marginLeft: 5,
              marginTop: 5,
              color: 'black',
            }}>
            10/18 18:17
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Menubar route={route} navigation={navigation} />
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    height: '7%',
    marginTop: 40,
    marginLeft: 15,
  },
  mainContainer: {
    justifyContent: 'flex-start',
    marginBottom: 175,
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    fontFamily: 'Inter',
  },
  result: {
    fontSize: 10,
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
    marginBottom: 5,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  buttontext: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '700',
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    height: '12%',
  },
});

const componentStyles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 81,
    height: 31,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#EAEAEA',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 5,
  },
  textBox: {
    width: 300,
    height: 160.53,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    marginTop: 15,
  },
});

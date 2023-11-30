import React, {ReactElement, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BriefingProps} from '../../types/props';
import {Menubar} from '../Mainpage/menubar/menubar';
import {fetchAllReport} from './api/fetchAllReport';
import {Report} from './types/types';

export const BriefingBoard = ({
  route,
  navigation,
}: BriefingProps): ReactElement | null => {
  const [briefingList, setBriefingList] = useState<Report[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllReport({
      payload: {
        userId: 2,
      },
    }).then(resp => {
      setBriefingList(resp.data ?? null);
      setLoading(false);
    });
  }, []);
  const generateReportList = (): React.JSX.Element[] | null => {
    if (!briefingList) {
      return [
        <View key={0} style={styles.mainContainer}>
          <View style={componentStyles.textBox}>
            <Text style={{...styles.result, textAlign: 'center', fontSize: 20}}>
              {'생성된 브리핑이 없습니다! :('}
            </Text>
          </View>
        </View>,
      ];
    }

    return briefingList.map((briefing, idx) => {
      const {reportType, created_at, payload} = briefing.report;
      const labelColor =
        reportType.toString() === 'SYNC'
          ? 'blue'
          : reportType.toString() === 'REPLACEMENT'
          ? 'green'
          : 'red';

      return (
        <View key={idx} style={styles.mainContainer}>
          <View style={componentStyles.textBox}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                marginLeft: 5,
                marginTop: 5,
                color: 'black',
              }}>
              {created_at}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginLeft: 5,
                color: labelColor,
              }}>
              {reportType.toString() === 'SYNC'
                ? '연결 성공'
                : reportType.toString() === 'REPLACEMENT'
                ? '업그레이드 성공'
                : '대체 성공'}
            </Text>
            <Text style={styles.result}>{payload}</Text>
          </View>
        </View>
      );
    });
  };

  const renderLoading = () => {
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
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
        <View style={styles.bottomContainer}>
          <Menubar route={route} navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  };
  const renderScreen = () => {
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
        <ScrollView style={styles.scrollViewContainer}>
          {generateReportList()}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Menubar route={route} navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  };

  return loading ? renderLoading() : renderScreen();
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  },
  scrollViewContainer: {
    display: 'flex',
    margin: 30,
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
    borderRadius: 15,
    marginTop: 15,
  },
});

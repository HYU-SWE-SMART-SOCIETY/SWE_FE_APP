import React, {ReactElement, useEffect, useState} from 'react';
import {LoadingProps} from '../../types/props';
import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {navToFirstMain} from './logic/navigateToScreen';

export const LoadingScreen = ({
  route,
  navigation,
}: LoadingProps): ReactElement | null => {
  const [loadingText, setLoadingText] = useState('');
  const [navFlag, setNavFlag] = useState(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (loadingText != route.params.text) {
      setLoadingText(route.params.text);
    }
  }, [route.params.text]);

  useEffect(() => {
    if (navFlag == 0) {
      typeof route.params.navFuncFlag === 'string'
        ? setNavFlag(Number(route.params.navFuncFlag))
        : setNavFlag(route.params.navFuncFlag);
    }
  }, [route.params.navFuncFlag]);

  useEffect(() => {
    if (data != route.params.data) setData(route.params.data);
  }, [route.params.data]);

  useEffect(() => {
    if (data != null) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    //* DEMO: Hard-coded for demo
    if (navFlag === 1) {
      setTimeout(() => {
        ToastAndroid.showWithGravity(
          '설정을 모두 불러왔습니다.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.replace('Main', {user: null, cmdFlag: 1});
      }, 5000);
    }
  }, [navFlag]);

  return (
    <View style={containerStyles.mainContainer}>
      <Text style={textStyles.mainText}>{'로딩 중...'}</Text>
      <Text style={textStyles.subText}>{loadingText}</Text>
      <View style={containerStyles.animationContainer}>
        <LottieView
          style={{width: '100%', height: '100%'}}
          source={require('./assets/lottie/loading_lottie.json')}
          autoPlay={true}
        />
      </View>
      <Text style={textStyles.subText}>{'Catch Phrases in here.'}</Text>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  animationContainer: {
    display: 'flex',
    marginVertical: 20,
    width: 200,
    height: 200,
  },
});

const textStyles = StyleSheet.create({
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  subText: {
    fontSize: 20,
    color: '#AAAAAA',
    marginVertical: 10,
  },
});

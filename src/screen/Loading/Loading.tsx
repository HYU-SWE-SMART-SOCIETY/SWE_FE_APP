import React, {ReactElement, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Linking,
} from 'react-native';
import {LoadingProps} from '../../types/props';
import {useLinkTo} from '@react-navigation/native';

export const Loading = ({
  route,
  navigation,
}: LoadingProps): ReactElement | null => {
  setTimeout(() => {
    Linking.openURL('holme://main?cmdFlag=1');
  }, 3000);
  return (
    <SafeAreaView>
      <Image
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 190,
          alignContent: 'center',
        }}
        source={require('./first.png')}
      />
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
      <View>
        <Text style={styles.textstyle}>설정을 불러오는 중입니다.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 100,
  },
});

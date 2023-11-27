import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Device = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 35,
            height: 35,
            marginLeft: 10,
            marginBottom: 3,
            alignContent: 'center',
          }}
          source={require('./device.png')}
        />
        <Text
          style={{
            fontSize: 13,
            color: '#000000',
            marginStart: 2,
            fontFamily: 'Inter',
            marginBottom: 5,
          }}>
          기기 설정
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    position: 'relative',
  },
});

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button4 = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            fontFamily: 'Inter',
            textAlign: 'center',
          }}>
          송풍
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            fontFamily: 'Inter',
            textAlign: 'center',
          }}>
          청정
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    width: 52,
    height: 52,
    borderColor: '#D9D9D9',
    borderRadius: 26,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

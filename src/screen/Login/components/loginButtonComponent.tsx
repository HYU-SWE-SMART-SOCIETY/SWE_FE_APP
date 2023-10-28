import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const LoginButtonComponent = (): ReactElement | null => {
  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <TouchableOpacity style={buttonStyles.buttonSetContainer}>
        <Text style={{fontSize: 10, color: '#7B7B7B', fontFamily: 'Inter'}}>
          {'로그인'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const LoginButtonComponent = (): ReactElement | null => {
  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <TouchableOpacity style={buttonStyles.buttonContainer}>
        <Text style={{fontSize: 10, color: '#7B7B7B'}}>{'로그인'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

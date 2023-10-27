import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const SNSLoginButtonComponent = (): ReactElement | null => {
  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <TouchableOpacity style={buttonStyles.buttonContainer}>
        <Text style={{fontSize: 10, color: '#000000', fontWeight: 'bold'}}>
          {'SNS 로그인'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
});

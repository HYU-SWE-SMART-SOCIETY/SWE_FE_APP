import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button11 = (): ReactElement | null => {
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
          자동 건조
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    width: 72.81,
    height: 45.06,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Blind = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
            marginBottom: 25,
          }}
          source={require('./blind.png')}
        />
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            marginStart: 10,
            fontFamily: 'Inter',
            marginBottom: 5,
          }}>
          블라인드
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 140,
    height: 90,
    borderColor: '#FFADAD',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#FFADAD',
    alignContent: 'center',
    position: 'relative',
  },
});

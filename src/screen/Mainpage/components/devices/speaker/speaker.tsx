import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Speaker = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 60,
            height: 40,
            marginLeft: 4,
            marginBottom: 25,
          }}
          source={require('./speaker.png')}
        />
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            marginStart: 10,
            fontFamily: 'Inter',
            marginBottom: 5,
          }}>
          스마트 스피커
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

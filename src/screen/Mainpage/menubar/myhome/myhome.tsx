import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Myhome = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 45,
            height: 45,
            marginLeft: 10,
            marginBottom: 3,
            alignContent: 'center',
          }}
          source={require('./myhome.png')}
        />
        <Text
          style={{
            fontSize: 13,
            color: '#000000',
            marginStart: 10,
            fontFamily: 'Inter',
            marginBottom: 5,
            textAlign: 'center',
          }}>
          나의 홂
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

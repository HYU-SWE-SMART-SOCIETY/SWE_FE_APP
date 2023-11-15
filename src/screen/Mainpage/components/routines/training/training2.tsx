import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Training2 = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image source={require('./training.png')} />
      </TouchableOpacity>
      <Text style={textStyles.main}>홈트</Text>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 58,
    height: 62,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#779BBB',
    backgroundColor: '#779BBB',
    alignContent: 'center',
    position: 'relative',
  },
});

const textStyles = StyleSheet.create({
  main: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    position: 'relative',
    textAlign: 'center',
    marginTop: 5,
  },
});

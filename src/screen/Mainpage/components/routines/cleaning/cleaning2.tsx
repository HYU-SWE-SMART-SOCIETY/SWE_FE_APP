import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Cleaning2 = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 55,
            height: 50,
            marginBottom: 3,
          }}
          source={require('./cleaning.png')}
        />
      </TouchableOpacity>
      <Text style={textStyles.main}>청소</Text>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 58,
    height: 62,
    borderColor: '#779BBB',
    backgroundColor: '#779BBB',
    borderRadius: 10,
    borderWidth: 1,
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

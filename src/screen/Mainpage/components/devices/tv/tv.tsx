import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export const Tv = (): ReactElement | null => {
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
          source={require('./TV.png')}
        />
        <Image
          style={{
            top: 3,
            right: 5,
            position: 'absolute',
          }}
          source={require('./Off.png')}
        />
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            marginStart: 10,
            fontFamily: 'Inter',
            marginBottom: 5,
          }}>
          TV
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

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export const Temup = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
        <Image
          style={{
            width: 17,
            height: 17,
            justifyContent: 'center',
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          source={require('./Triangle.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    width: 44,
    height: 44,
    borderColor: '#D9D9D9',
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

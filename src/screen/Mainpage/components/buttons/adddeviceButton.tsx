import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const AdddeviceButton = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonSetContainer}>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 20,
    height: 10,
    backgroundColor: '#000000'
  },
});

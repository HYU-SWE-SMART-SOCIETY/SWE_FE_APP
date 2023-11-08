import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const RoomSettingButton = (): ReactElement | null => {
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
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 7.5,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    marginLeft: 15,
  },
});
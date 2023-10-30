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
    width: 10,
    height: 10,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    marginLeft: 7,
    marginBottom: 2,
  },
});

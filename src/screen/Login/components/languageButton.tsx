import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const LanguageButton = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity style={componentStyles.buttonContainer} >
        <Text style={{fontSize: 10, color: '#000000', marginStart: 13}}>
          한국어 TODO
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 120,
    height: 35,
    borderColor: '#AEADAD',
    borderRadius: 15,
    borderWidth: 1,
  },
});

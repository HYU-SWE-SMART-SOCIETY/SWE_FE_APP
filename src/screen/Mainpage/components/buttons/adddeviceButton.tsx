import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from '../../QRCodeScanner';
import {AddProps} from '../../../../types/navigator';

export const Adddevice = ({
  route,
  navigation,
}: AddProps): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity
        style={componentStyles.buttonSetContainer}
        onPress={() => navigation.navigate('QR')}>
        <Text
          style={{
            fontSize: 10,
            color: '#000000',
            textAlign: 'center',
            fontFamily: 'Inter',
          }}>
          QR 코드
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 65,
    height: 25,
    borderColor: '#AEADAD',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },
});

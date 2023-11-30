import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import {AccontrolProps} from '../../../../../types/props';
import {rgbaColor} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export const Ac2 = ({
  route,
  navigation,
  trigger,
  temp,
}: AccontrolProps): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity
        style={componentStyles.buttonSetContainer}
        onPress={() =>
          navigation.navigate('Accontrol', {trigger: true, temp: 22})
        }>
        <View style={componentStyles.imageContainer2}>
          <Image
            style={{
              width: 100,
              height: 50,
              marginLeft: 10,
              alignContent: 'center',
            }}
            source={require('./ac.png')}
          />
          <Image
            style={{
              width: 18,
              height: 18,
              marginLeft: 175,
              alignContent: 'center',
            }}
            source={require('./Off.png')}
          />
        </View>
        <Text
          style={{
            fontSize: 11,
            color: '#000000',
            marginStart: 10,
            bottom: 10,
            fontFamily: 'Inter',
            position: 'absolute',
          }}>
          에어컨
        </Text>
        <View style={componentStyles.imageContainer}>
          <Image
            style={{
              width: 18,
              height: 18,
              marginLeft: 10,
              marginBottom: 15,
              alignContent: 'center',
            }}
            source={require('./minus.png')}
          />
          <Text
            style={{
              fontSize: 12,
              color: '#000000',
              marginStart: 10,
              fontFamily: 'Inter',
              marginBottom: 5,
            }}>
            22°C
          </Text>
          <Image
            style={{
              width: 18,
              height: 18,
              marginLeft: 10,
              alignContent: 'center',
            }}
            source={require('./Plus.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 310,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#779BBB',
    backgroundColor: '#779BBB',
    alignContent: 'center',
    position: 'relative',
  },
  imageContainer: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-around', // Add space between the buttons
    marginHorizontal: 115,
  },
  imageContainer2: {
    flexDirection: 'row', // Arrange items in a row
  },
});

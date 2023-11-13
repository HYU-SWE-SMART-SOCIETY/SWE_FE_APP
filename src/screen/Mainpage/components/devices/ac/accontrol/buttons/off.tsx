import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export const Off = (): ReactElement | null => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={{
            width: 68.11,
            height: 52.39,
          }}
          source={require('./Off.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

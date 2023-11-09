import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SKIP_LOGIN} from '../../env/modes';
import {GatewayProps} from '../../types/navigator';

export const GatewayScreen = ({
  route,
  navigation,
}: GatewayProps): ReactElement | null => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#FFFFFF'}}>
      <Text style={{textAlign: 'center', color: '#000000', fontSize: 22}}>
        DEV MODE!!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('WelcomeMain');
        }}>
        <Text style={styles.tag}>Move To Welcome Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('LoginMain');
        }}>
        <Text style={styles.tag}>Move To Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={styles.tag}>Move To Main Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Accontrol');
        }}>
        <Text style={styles.tag}>Move To Accontrol Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('QR');
        }}>
        <Text style={styles.tag}>Move To QR code scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    marginVertical: 20,
    backgroundColor: '#AAAAAA',
  },
  tag: {textAlign: 'center', color: '#000000', fontSize: 15},
});

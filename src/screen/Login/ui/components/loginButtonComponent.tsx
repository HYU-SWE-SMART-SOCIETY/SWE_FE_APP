import React, {ReactElement} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LoginInfoParams} from '../../types/types';
import {checkIfRequiredFieldFilled} from '../../logic/loginLogics';
import {sendLoginRequest} from '../../api/sendLoginRequest';

export const LoginButtonComponent = ({
  ident,
  pw,
}: LoginInfoParams): ReactElement | null => {
  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <TouchableOpacity
        onPress={() => {
          if (!checkIfRequiredFieldFilled(ident, pw)) {
            Alert.alert(
              'Please Fill all required fields!',
              '아이디 혹은 비밀번호가 입력되지 않았습니다.',
            );
          } else {
            sendLoginRequest({enteredID: ident, enteredPW: pw}).then(r => {
              console.log(r);
            });
          }
        }}
        style={buttonStyles.buttonSetContainer}>
        <Text style={{fontSize: 10, color: '#7B7B7B', fontFamily: 'Inter'}}>
          {'로그인'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  buttonSetContainer: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

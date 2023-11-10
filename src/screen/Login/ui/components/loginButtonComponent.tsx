import React, {ReactElement} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LoginInfoParams} from '../../types/types';
import {checkIfRequiredFieldFilled, handleLogin} from '../../logic/loginLogics';
import {sendLoginRequest} from '../../api/sendLoginRequest';

export const LoginButtonComponent = ({
  ident,
  pw,
  setLogin,
  setUser,
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
            sendLoginRequest({enteredID: ident, enteredPW: pw}).then(res => {
              if (!res.ok)
                Alert.alert(
                  'FATAL ERROR!',
                  'Something Gone Wrong! ' + res.error,
                );
              else if (!res.login)
                Alert.alert('Login Failed!', '해당 유저가 존재하지 않습니다.');
              else {
                handleLogin(setUser, res.payload?.data).then(() => {
                  setLogin(true);
                });
              }
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

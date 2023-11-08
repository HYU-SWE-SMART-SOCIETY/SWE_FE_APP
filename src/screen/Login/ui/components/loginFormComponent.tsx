import React, {ReactElement, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {LoginSystemText} from '../assets/strings';
import {LoginFormParams} from '../../types/types';

export const LoginFormComponent = ({
  setIdent,
  setPw,
}: LoginFormParams): ReactElement | null => {
  return (
    <View style={componentStyles.componentContainer}>
      <View style={componentStyles.formContainer}>
        <Text style={textStyles.tag}>{'아이디 (ID)'}</Text>
        <TextInput
          style={componentStyles.inputContainer}
          placeholder={LoginSystemText.PlaceHolder_ID}
          placeholderTextColor={'#A19B9B'}
          onChangeText={setIdent}
        />
      </View>
      <View style={componentStyles.formContainer}>
        <Text style={textStyles.tag}>{'비밀번호'}</Text>
        <TextInput
          style={componentStyles.inputContainer}
          textContentType={'password'}
          secureTextEntry={true}
          placeholder={LoginSystemText.PlaceHolder_PW}
          placeholderTextColor={'#A19B9B'}
          onChangeText={setPw}
        />
      </View>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  componentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 25,
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    fontSize: 10,
    color: '#000000',
  },
});

const textStyles = StyleSheet.create({
  tag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Inter',
  },
});

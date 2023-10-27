import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const LoginFormComponent = (): ReactElement | null => {
  return (
    <View style={componentStyles.componentContainer}>
      <View style={componentStyles.formContainer}>
        <Text style={textStyles.tag}>{'아이디 (ID)'}</Text>
        <TextInput
          style={componentStyles.inputContainer}
          placeholder={'이메일 또는 아이디를 입력해주세요.'}
          placeholderTextColor={'#A19B9B'}
        />
      </View>
      <View style={componentStyles.formContainer}>
        <Text style={textStyles.tag}>{'비밀번호'}</Text>
        <TextInput
          style={componentStyles.inputContainer}
          textContentType={'password'}
          secureTextEntry={true}
          placeholder={'비밀번호를 입력해주세요.'}
          placeholderTextColor={'#A19B9B'}
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
  },
});

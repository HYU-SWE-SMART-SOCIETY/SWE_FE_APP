import React, {ReactElement, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {LanguageButton} from './components/languageButton';
import {LoginFormComponent} from './components/loginFormComponent';
import {LoginButtonComponent} from './components/loginButtonComponent';
import {AccountUtilsComponent} from './components/accountUtilsComponent';
import {SNSLoginButtonComponent} from './components/snsLoginButtonComponent';
import {LoginMainProps} from '../../../types/props';
import {LoginSystemText} from './assets/strings';
import {User} from '../../../types/entity/user';

export const LoginScreen = ({
  route,
  navigation,
}: LoginMainProps): ReactElement | null => {
  const [ident, setIdent] = useState('');
  const [pw, setPw] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    //* Handle Logged In
    if (login) {
      //* Navigate to next screen
      navigation.navigate('Main', {user, cmdFlag: 0});
      setLogin(false);
    }
  }, [login]);

  return (
    <SafeAreaView>
      <View style={containerStyles.mainContainer}>
        <View style={containerStyles.headerContainer}>
          <LanguageButton />
        </View>
        <View style={containerStyles.bodyContainer}>
          <Text style={textStyles.title}>{LoginSystemText.AppName}</Text>
          <LoginFormComponent setIdent={setIdent} setPw={setPw} />
          <LoginButtonComponent
            ident={ident.trim()}
            pw={pw.trim()}
            setLogin={setLogin}
            setUser={setUser}
          />
          <AccountUtilsComponent />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#000000',
              marginTop: 25,
            }}
          />
          <SNSLoginButtonComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    //TODO: Add adjustment
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
  },
});

const textStyles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    fontFamily: 'Inter',
  },
});

import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screen/Login/LoginScreen';
import {ScreenStackParamList} from '../types/navigator';
import {GatewayScreen} from '../screen/gateway/gatewayScreen';
import {DEV_MODE, SKIP_LOGIN} from '../env/modes';
import {WelcomeScreen} from '../screen/WelcomeScreen/WelcomeScreen';

const RootStack = createNativeStackNavigator<ScreenStackParamList>();

export const RootNavigator = (): ReactElement | null => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'Gateway'}
        screenOptions={{headerShown: false}}>
        <>
          <RootStack.Screen name={'Gateway'} component={GatewayScreen} />
          <RootStack.Group>
            <RootStack.Screen name={'WelcomeMain'} component={WelcomeScreen} />
          </RootStack.Group>
          <RootStack.Group>
            <RootStack.Screen name={'LoginMain'} component={LoginScreen} />
          </RootStack.Group>
        </>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

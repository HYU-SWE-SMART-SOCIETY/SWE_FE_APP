import React, {ReactElement, RefObject} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screen/Login/ui/LoginScreen';
import {ScreenStackParamList} from '../types/navigator';
import {GatewayScreen} from '../screen/gateway/gatewayScreen';
import {DEV_MODE, SKIP_LOGIN} from '../env/modes';

import {AccontrolScreen} from '../screen/Mainpage/components/devices/ac/accontrol/accontrol';
import QRCodeScanner from '../screen/Mainpage/QRCodeScanner';
import {Adddevice} from '../screen/Mainpage/components/buttons/adddeviceButton';
import {WelcomeScreen} from '../screen/WelcomeScreen/ui/WelcomeScreen';
import {MainScreen} from '../screen/Mainpage/MainScreen';
import {deepLinkingConfig} from '../link/deepLinkingConfig';
import {ModalContent} from '../screen/Mainpage/components/modals/modalcontent';
import {MainScreen2} from '../screen/Mainpage/MainScreen2';
import {LoadingScreen} from '../screen/Loading/LoadingScreen';
import {BriefingBoard} from '../screen/BriefingBoard/BriefingBoard';

const RootStack = createNativeStackNavigator<ScreenStackParamList>();

export const RootNavigator = (): ReactElement | null => {
  return (
    <NavigationContainer linking={deepLinkingConfig}>
      <RootStack.Navigator
        initialRouteName={'Gateway'}
        screenOptions={{headerShown: false}}>
        <>
          <RootStack.Screen name={'Gateway'} component={GatewayScreen} />
          <RootStack.Group>
            <RootStack.Screen name={'Loading'} component={LoadingScreen} />
            <RootStack.Screen name={'WelcomeMain'} component={WelcomeScreen} />
            <RootStack.Screen name={'LoginMain'} component={LoginScreen} />
            <RootStack.Screen name={'Main'} component={MainScreen} />
            <RootStack.Screen name={'Accontrol'} component={AccontrolScreen} />
            <RootStack.Screen name={'QR'} component={QRCodeScanner} />
            <RootStack.Screen name={'Main2'} component={MainScreen2} />
            <RootStack.Screen name={'briefing'} component={BriefingBoard} />
          </RootStack.Group>
        </>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

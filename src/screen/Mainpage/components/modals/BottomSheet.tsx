import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ModalContent} from './modalcontent';
import {fetchSettingData} from '../../api/fetchSettingData';

interface BottomSheetProps {
  userId: number;
  settingName: string;
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BottomSheet = ({
  userId,
  settingName,
  bottomSheetVisible,
  setBottomSheetVisible,
}: BottomSheetProps) => {
  const screenHeight = Dimensions.get('screen').height;

  // Animation Settings
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheetAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheetAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = () => {
    closeBottomSheetAnim.start(() => {
      setBottomSheetVisible(false);
    });
  };

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (gestureEvent, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) closeBottomSheet();
        else resetBottomSheetAnim.start();
      },
    }),
  ).current;

  const [setting, setSetting] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bottomSheetVisible) resetBottomSheetAnim.start();
  }, [bottomSheetVisible]);

  //* Fetch Data
  useEffect(() => {
    fetchSettingData({
      userId,
      settingName,
    }).then(res => {
      if (!res.ok || res.payload?.data.instanceSetting == undefined) {
        ToastAndroid.showWithGravity(
          'ERROR! Something must be wrong...',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        const settingString = res.payload.data.instanceSetting;
        setSetting(settingString);
      }
    });
  }, []);

  //* End Loading
  useEffect(() => {
    if (setting.length > 0) {
      setLoading(false);
    }
  }, [setting]);

  return (
    <Modal
      visible={bottomSheetVisible}
      animationType={'fade'}
      transparent={true}
      statusBarTranslucent={true}>
      <View style={BottomSheetStyles.overlay}>
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View style={BottomSheetStyles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...BottomSheetStyles.bottomSheetContainer,
            transform: [{translateY}],
          }}
          {...panResponders.panHandlers}>
          {!loading ? (
            <ModalContent userId={userId} setting={setting} />
          ) : (
            <View
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={'large'} />
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const BottomSheetStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)', //Alpha Value
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: 650,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ModalContent2} from './modalcontent2';

interface BottomSheetProps {
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BottomSheet2 = ({
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

  useEffect(() => {
    if (bottomSheetVisible) resetBottomSheetAnim.start();
  }, [bottomSheetVisible]);

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
          <ModalContent2 />
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

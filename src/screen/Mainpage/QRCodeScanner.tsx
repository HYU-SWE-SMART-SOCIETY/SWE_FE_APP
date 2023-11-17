import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  View,
  Linking,
} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';

const QRCodeScanner = () => {
  const [scaned, setScaned] = useState<boolean>(true);
  const ref = useRef(null);

  useEffect(() => {
    // 종료후 재시작을 했을때 초기화
    setScaned(true);
  }, []);

  const onBarCodeRead = (event: any) => {
    if (!scaned) return;
    setScaned(false);
    Linking.openURL(event.nativeEvent.codeStringValue);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.scanner}
        ref={ref}
        cameraType={CameraType.Back} // Front/Back(default)
        // Barcode Scanner Props
        scanBarcode
        showFrame={false}
        laserColor="rgba(0, 0, 0, 0)"
        frameColor="rgba(0, 0, 0, 0)"
        surfaceColor="rgba(0, 0, 0, 0)"
        onReadCode={onBarCodeRead}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scanner: {flex: 1},
});
export default QRCodeScanner;

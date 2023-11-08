import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WelcomeProps} from '../../../types/navigator';
import {Layer} from './components/Layer';
import {SystemText} from './assets/strings';

//* Images
import FirstImage from './assets/first.png';
import SecondImage from './assets/second.png';
import ThirdImage from './assets/third.png';
import FinalImage from './assets/final.png';

export const WelcomeScreen = ({
  route,
  navigation,
}: WelcomeProps): ReactElement | null => {
  const [curLayer, setCurLayer] = useState(0);
  const [title, setTitle] = useState('');
  const [subTitle, setSubtitle] = useState('');
  const [imageDir, setImageDir] = useState('');
  const [showFinalButton, setShowFinalButton] = useState(false);

  //* Carousel Page Definition
  const fadeInOutButton = useRef(new Animated.Value(0)).current;
  const fadeInOutLayer = useRef(new Animated.Value(0)).current;

  const showNextLayerAnim = () => {
    if (curLayer == 2) {
      //* TODO: Hard Coded Condition. Need to refactor later.
      showFinalButtonAnim();
    }
    Animated.timing(fadeInOutLayer, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setCurLayer((curLayer + 1) % 4);
      fadeInLayer();
    });
  };

  const showFinalButtonAnim = () => {
    Animated.timing(fadeInOutButton, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      fadeInButton();
    });
  };

  const fadeInLayer = () => {
    Animated.timing(fadeInOutLayer, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeInButton = () => {
    Animated.timing(fadeInOutButton, {
      toValue: 1,
      delay: 500,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleNext = () => {
    showNextLayerAnim();
  };

  //* Init.
  useEffect(() => {
    fadeInLayer();
    fadeInButton();
  }, []);

  //* Change on focused Layer
  useEffect(() => {
    switch (curLayer) {
      case 0: {
        setTitle(SystemText.FirstLayerTitle);
        setSubtitle(SystemText.FirstLayerSubTitle);
        setImageDir(Image.resolveAssetSource(FirstImage).uri);
        break;
      }
      case 1: {
        setTitle(SystemText.SecondLayerTitle);
        setSubtitle(SystemText.SecondLayerSubTitle);
        setImageDir(Image.resolveAssetSource(SecondImage).uri);
        break;
      }
      case 2: {
        setTitle(SystemText.ThirdLayerTitle);
        setSubtitle(SystemText.ThirdLayerSubTitle);
        setImageDir(Image.resolveAssetSource(ThirdImage).uri);
        break;
      }
      default: {
        setShowFinalButton(true);
        setTitle(SystemText.FinalLayerTitle);
        setSubtitle(SystemText.FinalLayerSubTitle);
        setImageDir(Image.resolveAssetSource(FinalImage).uri);
        break;
      }
    }
  }, [curLayer]);

  return (
    <View style={containerStyles.mainContainer}>
      <Animated.View style={{opacity: fadeInOutLayer}}>
        {imageDir != '' && ( //* Render After Loaded
          <Layer title={title} subtitle={subTitle} imageDir={imageDir} />
        )}
      </Animated.View>
      <Animated.View
        style={[containerStyles.footerContainer, {opacity: fadeInOutButton}]}>
        <View style={containerStyles.indicatorContainer}>
          {Array.from({length: 4}, (_, idx) => idx).map(idx => (
            <View
              key={`indicator__${idx}`}
              style={indicatorStyle(idx == curLayer).indicator}
            />
          ))}
        </View>
        {showFinalButton ? (
          <View style={containerStyles.buttonSetContainer}>
            <TouchableOpacity
              style={containerStyles.buttonContainer}
              onPress={() => {
                navigation.replace('LoginMain');
              }}>
              <Text style={textStyle.tag}>{'로그인하기'}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={containerStyles.buttonSetContainer}>
            <TouchableOpacity
              style={containerStyles.buttonContainer}
              onPress={() => {
                navigation.replace('LoginMain'); //* Replace: Remove current page for the history
              }}>
              <Text style={textStyle.tag}>{'건너뛰기'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={containerStyles.buttonContainer}
              onPress={() => {
                handleNext();
              }}>
              <Text style={textStyle.tag}>{'다음'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  footerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonSetContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 30,
  },
  buttonContainer: {
    display: 'flex',
    width: 135,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

const textStyle = StyleSheet.create({
  tag: {
    textAlign: 'center',
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.43,
  },
});

const indicatorStyle = (focused: boolean) =>
  StyleSheet.create({
    indicator: {
      marginVertical: 0,
      marginHorizontal: 4,
      backgroundColor: focused ? '#262626' : '#DFDFDF',
      width: 6,
      height: 6,
      borderRadius: 3,
    },
  });

import React, {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const AccountUtilsComponent = (): ReactElement | null => {
  return (
    <View style={componentStyles.componentContainer}>
      <View style={componentStyles.sectorContainer}>
        <TouchableOpacity style={componentStyles.touchableAreaContainer}>
          <Text style={textStyles.tag}>{'아이디 찾기'}</Text>
        </TouchableOpacity>
        <View style={miscellaneousStyles.vertBreakLine} />
        <TouchableOpacity style={componentStyles.touchableAreaContainer}>
          <Text style={textStyles.tag}>{'비밀번호 재설정'}</Text>
        </TouchableOpacity>
      </View>
      <View style={componentStyles.sectorContainer}>
        <TouchableOpacity style={componentStyles.touchableAreaContainer}>
          <Text style={textStyles.tag}>{'회원가입'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  componentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectorContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  touchableAreaContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

const textStyles = StyleSheet.create({
  tag: {
    fontSize: 12,
    width: 80,
    textAlign: 'center',
    color: '#737373',
  },
});

const miscellaneousStyles = StyleSheet.create({
  vertBreakLine: {
    width: 1,
    height: 22,
    backgroundColor: '#C4C4C4',
  },
});

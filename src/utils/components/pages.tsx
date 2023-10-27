import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CarouselPage} from '../types/utils';

const pageStyles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Page = ({item, style, render}: CarouselPage) => {
  return (
    <View style={{...pageStyles, ...style, borderWidth: 1}}>{render}</View>
  );
};

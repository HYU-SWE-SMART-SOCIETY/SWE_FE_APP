import React, {ReactElement, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CarouselPage, CarouselParamType} from '../types/utils';
import {Page} from './pages';

export const Carousel = ({
  gap,
  offset,
  pages,
  pageWidth,
}: CarouselParamType): ReactElement | null => {
  const [curPage, setCurPage] = useState(0);

  const renderItem = ({item}: any): ReactElement | null => {
    return (
      <Page
        key={item.index}
        item={item}
        style={{width: pageWidth, marginHorizontal: gap / 2}}
        render={item.render}
      />
    );
  };

  //* onScroll: Indicate the current focused page.
  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setCurPage(newPage);
  };

  return (
    <View style={carouselStyle.carouselContainer}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate={'normal'}
        horizontal={true}
        keyExtractor={(item: any) => `page__${item.index}`}
        onScroll={onScroll}
        pagingEnabled={true}
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment={'start'}
        showsHorizontalScrollIndicator={true}
      />
      <View style={carouselStyle.indicatorContainer}>
        {Array.from({length: pages.length}, (_, idx) => idx).map(idx => (
          <View
            key={`indicator__${idx}`}
            style={indicatorStyle(idx === curPage).carouselIndicator}
          />
        ))}
      </View>
    </View>
  );
};

const carouselStyle = StyleSheet.create({
  carouselContainer: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

const indicatorStyle = (focused: boolean) =>
  StyleSheet.create({
    carouselIndicator: {
      marginVertical: 0,
      marginHorizontal: 4,
      backgroundColor: focused ? '#262626' : '#DFDFDF',
      width: 6,
      height: 6,
      borderRadius: 3,
    },
  });

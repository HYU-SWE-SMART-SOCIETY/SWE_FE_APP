import {ViewStyle} from 'react-native';
import {ReactElement} from 'react';

export interface CarouselParamType {
  gap: number;
  offset: number;
  pages: any;
  pageWidth: number;
}

export interface CarouselPage {
  item: {index: number};
  style: ViewStyle;
  render: ReactElement;
}

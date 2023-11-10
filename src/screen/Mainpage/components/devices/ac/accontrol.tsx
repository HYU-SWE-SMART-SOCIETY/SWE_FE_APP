import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {AccontrolProps} from '../../../../../types/navigator';

export const AccontrolScreen = ({
  route,
  navigation,
}: AccontrolProps | null): ReactElement | null => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>에어컨 컨트롤러</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C85858',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    padding: 35,
    alignItems: 'center',
    height: 120,
  },
  headerContainer2: {
    position: 'relative',
    right: -20,
    top: 35,
  },
  main: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    marginLeft: 28,
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  lineImage: {
    alignSelf: 'center',
    width: 300,
  },
  routinesTitle: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#000000',
    marginLeft: 28,
    marginTop: 25,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginHorizontal: 15,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    height: '15%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },
});

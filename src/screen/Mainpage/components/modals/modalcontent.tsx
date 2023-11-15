import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export const ModalContent = ({}): ReactElement | null => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Image
          style={{
            width: 64,
            height: 3,
          }}
          source={require('./ThickLine.png')}
        />
        <Text style={styles.title}>공간 설정</Text>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Text style={styles.edit}>편집</Text>
          </TouchableOpacity>
          <View style={styles.mainContainer}>
            <Text style={styles.space}>현재 공간</Text>
            <TouchableOpacity style={{width: 500}}>
              <View style={styles.alignrow}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 3,
                  }}
                  source={require('./homeicon.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#C85859',
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  자취방
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{marginTop: 5, marginBottom: 15}}
              source={require('./Line.png')}
            />
            <Text style={styles.space}>다른 공간</Text>
            <TouchableOpacity style={{width: 500}}>
              <View style={styles.alignrow}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 3,
                  }}
                  source={require('./homeicon.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#287814',
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  본가
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{marginTop: 5, marginBottom: 5}}
              source={require('./Line.png')}
            />
            <TouchableOpacity style={{width: 500}}>
              <View style={styles.alignrow}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 3,
                  }}
                  source={require('./hotelicon.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#041B93',
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  한양 호텔 ITBT관 203호
                </Text>
              </View>
            </TouchableOpacity>
            <Image style={{marginTop: 5}} source={require('./Line.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 25,
  },
  mainContainer: {
    alignItems: 'flex-start',
    left: 25,
    marginTop: 25,
  },
  edit: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#998989',
    textAlign: 'right',
    right: 15,
  },
  space: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#979797',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    fontFamily: 'Inter',
    marginTop: 20,
  },
  alignrow: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

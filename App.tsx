/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * https://codedaily.io/tutorials/22/The-Shapes-of-React-Native
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

const BlockLine = () => {
  return (
    <>
      <View style={styles.blockLine}>
        <View style={[styles.circle, styles.circleLeft]}></View>
        <View style={styles.line}></View>
        <View style={[styles.circle, styles.circleRight]}></View>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.block}>
            <View style={styles.contentWrapper}>
              <Text style={styles.title}>Garuda GA-153</Text>
              <Text style={styles.subTitle}>Ecconomy (Subclass L)</Text>
            </View>
            <View style={styles.logo}>
              <ImageBackground
                source={require('./assets/logo.png')}
                style={styles.img}
              />
            </View>
          </View>
          <BlockLine />
          <View style={styles.blockTime}>
            <View style={styles.time}>
              <View style={styles.contentWrapper}>
                <Text style={styles.title}>08:55</Text>
                <Text style={styles.subTitle}>28 Mar</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.subTitle}>1h 40m</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.title}>08:55</Text>
                <Text style={styles.subTitle}>28 Mar</Text>
              </View>
            </View>
            <View style={styles.lineHori}>
              <View style={[styles.dot, styles.dotBorder]}></View>
              <View style={styles.lineDash}></View>
              <View style={[styles.dot, styles.dotBack]}></View>
            </View>
            <View style={styles.blockFrom}>
              <View style={styles.contentWrapper}>
                <Text style={styles.title}>Batam (BTH)</Text>
                <Text style={styles.subTitle}>Hang Nadim</Text>
              </View>
              <View style={styles.logo}>
                <ImageBackground
                  source={require('./assets/logo.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.title}>Jakara</Text>
                <Text style={styles.subTitle}>
                  Soekamo Hatta intl Airport, Termial 3
                </Text>
              </View>
            </View>
          </View>
          <BlockLine />
          <View style={styles.blockCode}>
            <Text style={styles.titleCode}>Airline Booking Code (PNR)</Text>
            <Text style={styles.code}>55F60F</Text>
          </View>
          <BlockLine />
          <View style={styles.blockCode}>
            <Text style={styles.title}>Passenger(s)</Text>
            <View style={{marginTop:10, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>1.</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={[styles.title, {fontWeight: '400'}]}>
                  Mr Muhammad Irvan Stutrody
                </Text>
                <Text style={styles.subTitle}>20kg, Infight meal</Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'center',
                  borderRadius: 4,
                }}>
                <Text style={{backgroundColor: '#ededed', padding: 6}}>Adult</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    padding: 10,
  },
  wrapper: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.2,
  },
  block: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrapper: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    color: '#8d9192',
  },
  logo: {},
  img: {
    width: 60,
    height: 60,
  },
  blockLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: -10,
    marginRight: -10,
    zIndex: 100,
  },
  circle: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: '#ececec',
    borderRightWidth: 10,
    borderRightColor: '#ececec',
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: '#b6b6b6',
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    // shadowOpacity: 0.2,
    zIndex: 999,
  },
  circleLeft: {
    transform: [{rotate: '45deg'}],
  },
  circleRight: {
    transform: [{rotate: '-135deg'}],
  },
  blockTime: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    borderStyle: 'dashed',
    flex: 1,
    borderColor: '#dbdbdb',
  },
  time: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  lineHori: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  dotBorder: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  dotBack: {
    backgroundColor: 'red',
  },
  lineDash: {
    borderWidth: 1,
    borderStyle: 'dashed',
    flex: 1,
    borderColor: '#dbdbdb',
  },
  blockFrom: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  blockCode: {
    flexDirection: 'column',
    padding: 10,
  },
  titleCode: {
    fontSize: 16,
  },
  code: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#f14d68',
    fontSize: 16,
  },
});

export default App;

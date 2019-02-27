/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/configStore';
import Feed from './src/components/FeedComponent';

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
          <StatusBar />
           <Feed />
      </Provider>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

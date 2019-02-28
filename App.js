/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/configStore';
import Feed from './src/components/FeedComponent';

export default class App extends Component{
 constructor(props){
   super(props);
   AsyncStorage.setItem('token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9hcGlkZXYuY2FudmFzZWUuY29tL2FwaS91c2VyL2xvZ2luIiwiaWF0IjoxNTUxMzE4MjkzLCJleHAiOjE1NTM5NDYyOTMsIm5iZiI6MTU1MTMxODI5MywianRpIjoiWVhZREZZZnp4RTE1RVFtayJ9.xFwfEdec4eJGyr6G42vZMQjHXBN0fE2l1mwKJkkBs_c");
 }
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

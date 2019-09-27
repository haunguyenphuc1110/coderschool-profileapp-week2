import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './src/screens/index';

export default class App extends Component {
  render(){
    return (
      <ProfileScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Header from './Header';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB50RIgqAAPO5TxIdFopUIvovtnCPueczA',
      authDomain: 'react-native-firebase-47caa.firebaseapp.com',
      databaseURL: 'https://react-native-firebase-47caa.firebaseio.com',
      projectId: 'react-native-firebase-47caa',
      storageBucket: 'react-native-firebase-47caa.appspot.com',
      messagingSenderId: '881896367654',
      appId: '1:881896367654:web:05635705f87465e8e9a8e7',
      measurementId: 'G-DVWRHH7BZ0',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    return (
      <View>
        <Header showText="ログイン" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

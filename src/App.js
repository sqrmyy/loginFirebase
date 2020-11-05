import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Header from './Header';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'dammy',
      authDomain: 'react-native-firebase-dammy.com',
      databaseURL: 'https://react-native-firebase-dammy.com',
      projectId: 'react-native-firebase-dammy',
      storageBucket: 'react-native-firebase-dammy.com',
      messagingSenderId: 'dammy',
      appId: '1:dammy:web:dammy',
      measurementId: 'dammy-dammy',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderForm() {
    if (this.state.loggedIn) {
      return (
        <View style={styles.wrap}>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>ログアウト</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <LoginForm />;
    }
  }

  render() {
    return (
      <View>
        <Header showText="ログイン" />
        {this.renderForm()}
        <View>
          <Text>
            {this.state.loggedIn ? 'ログイン中だよ！' : 'ログインしてないよ！'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  wrap: {
    padding: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
};

export default App;

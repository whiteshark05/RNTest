import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    isLogin: false
  }

  setLogin = () => {
    this.setState({ isLogin: true });
    // this.state.isLogin = true;
  }

  render() {
    if (!this.state.isLogin) {
      return (
        <View style={styles.container}>
          <Button onPress={() => this.setLogin()}
            title="Login"
            color="#841584" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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

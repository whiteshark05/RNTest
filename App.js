import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    isLogin: false
  }

  setLogin = () => {
    this.setState({ isLogin: true });
     this.state.isLogin = true;
  }

  render() {
    return (
      <View style={styles.container}>
        
          <Button onPress={() => this.setLogin()}
            title="1"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="2"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="3"
            color="#841584" />

          <Button onPress={() => this.setLogin()}
            title="4"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="5"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="6"
            color="#841584" />

          <Button onPress={() => this.setLogin()}
            title="7"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="8"
            color="#841584" />
          <Button onPress={() => this.setLogin()}
            title="9"
            color="#841584" />

          <Button onPress={() => this.setLogin()}
            title="+"
            color="#841584" />  

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

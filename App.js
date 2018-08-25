import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    isLogin: false,
    stringLog: '',
    num1: 0,
    num2: 0,
    result: '',
  }

  setLogin = () => {
    this.setState({ isLogin: true });
     this.state.isLogin = true;
  }

  press = (val) => {
    this.setState({
      stringLog: this.state.stringLog + val,
    });
  }
  
  reset = () => {
    this.setState({
      stringLog: '',
    })
  }

  back = () => {
    this.setState({
      stringLog: this.state.stringLog.slice(0,-1),
    })
  }

  //Render result

  calculate = (this.state.stringLog) =>{
    
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerrow}>
            <Text>{this.state.stringLog}</Text> 
          </View>

          <View>
            <Text>{this.state.result}</Text>
          </View>

          <View style={styles.containerrow}>
              <TouchableOpacity style={styles.button} onPress={() => this.reset()}>
                <Text style={{ color: '#fff' }}>RESET</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.back()}>
                <Text style={{ color: '#fff' }}>BACK</Text>
              </TouchableOpacity>
          </View>    

           <View style={styles.containerrow}>
              <TouchableOpacity style={styles.button} onPress={() => this.press('7')}>
                <Text style={{ color: '#fff' }}>7</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('8')}>
                <Text style={{ color: '#fff' }}>8</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('9')}>
                <Text style={{ color: '#fff' }}>9</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('/')}>
                <Text style={{ color: '#fff' }}>/</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.containerrow}>
              <TouchableOpacity style={styles.button} onPress={() => this.press('4')}>
                <Text style={{ color: '#fff' }}>4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('5')}>
                <Text style={{ color: '#fff' }}>5</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('6')}>
                <Text style={{ color: '#fff' }}>6</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('*')}>
                <Text style={{ color: '#fff' }}>*</Text>
              </TouchableOpacity>
          </View> 

          <View style={styles.containerrow}>
              <TouchableOpacity style={styles.button} onPress={() => this.press('1')}>
                <Text style={{ color: '#fff' }}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('2')}>
                <Text style={{ color: '#fff' }}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('3')}>
                <Text style={{ color: '#fff' }}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('-')}>
                <Text style={{ color: '#fff' }}>-</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.containerrow}>
              <TouchableOpacity style={styles.button} onPress={() => this.press('0')}>
                <Text style={{ color: '#fff' }}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('.')}>
                <Text style={{ color: '#fff' }}>.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.calculate(this.state.stringLog)}>
                <Text style={{ color: '#fff' }}>=</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.press('+')}>
                <Text style={{ color: '#fff' }}>+</Text>
              </TouchableOpacity>
          </View>   

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
    padding: 10,
  },
  containerrow: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: "#841584",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  }
});

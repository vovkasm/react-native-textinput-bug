/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '123'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Filtered text input, only numbers allowed
        </Text>
        <TextInput style={styles.textInput} value={this.state.text} onChangeText={this.onChangeText}/>
      </View>
    );
  }
  onChangeText = (text) => {
    const newText = text.replace(/\D+/, '')
    console.log(`onChangeText '${text}' -> '${newText}'`)
    this.setState({ text: newText })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    alignSelf: 'stretch',
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
  }
});

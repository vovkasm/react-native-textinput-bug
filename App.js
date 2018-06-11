/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.instructions}>
          Sample of bug #18874.
          Controlled text input with filtering, only numbers should be allowed.
        </Text>
        <TextInput style={styles.textInput} value={this.state.text} onChangeText={this.onChangeText}/>
      </KeyboardAvoidingView>
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
    marginHorizontal: 16,
  },
  textInput: {
    alignSelf: 'stretch',
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
  }
});

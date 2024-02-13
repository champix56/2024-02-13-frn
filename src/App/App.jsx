import React from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      <Text style={styles.demat}>DEMAT Breizh</Text>
      <Button text="dfghjkl" />
      <Button text="fddsdl" />
      <Button text="hello" />
      <Button text="de lu" />
    </View>
  );
}

export default App;

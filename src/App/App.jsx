import React from 'react';
import {Text, ToastAndroid, Vibration, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      <Text style={styles.demat}>DEMAT Breizh</Text>
      <Button
        text="dfghjkl"
        bgColor="red"
        onButtonPress={evt => {
          ToastAndroid.show('Coucou', ToastAndroid.LONG);
          Vibration.vibrate(1000);
          console.log(evt);
        }}
      />
      <Button text="fddsdl" bgColor="tomato" />
      <Button text="hello" bgColor="skyblue" />
      <Button text="de lu" />
    </View>
  );
}

export default App;

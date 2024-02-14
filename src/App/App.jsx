import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setCounter] = useState(-1);
  useEffect(() => {
    /*componentDidMount*/
    setCounter(0);
    return () => {
      //componentWillUnmout
      console.log('unmountApp');
    };
  }, []);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <View>
      <Text style={styles.demat}>counter value :{counter}</Text>
      <Button
        text="-1"
        bgColor="red"
        onButtonPress={evt => {
          setCounter(counter - 1);
          console.log(counter, evt);
        }}
      />

      <Button
        text="+1"
        onButtonPress={e => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
    </View>
  );
}

export default App;

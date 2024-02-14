import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';
import DocInList from './components/ui/DocInList/DocInList';
import ListDoc from './components/layout/ListDoc/ListDoc';

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
      <ListDoc>
        <DocInList type="PDF" date="2024-01-01" titre="Document 1" />
        <DocInList type="IMG" titre="Document 2" />
        <DocInList type="PPT" titre="Powerpoint" date="2024-01-04" />
        <DocInList type="PPT" titre="Powerpoint" date="2024-01-04" />
        <DocInList type="PDF" titre="PDF 24" date="2024-01-04" />
        <DocInList type="PDF" titre="PDF 24" date="2024-01-04" />
        <DocInList type="PDF" titre="PDF 24" date="2024-01-04" />
        <DocInList type="PDF" titre="PDF 24" date="2024-01-04" />
        <DocInList type="PDF" titre="PDF 24" date="2024-01-04" />
        <DocInList type="PPT" titre="Powerpoint" date="2024-01-04" />
      </ListDoc>
    </View>
  );
}

export default App;

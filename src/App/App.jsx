import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';
import DocInList from './components/ui/DocInList/DocInList';
import ListDoc from './components/layout/ListDoc/ListDoc';

function App() {
  const [state, setsetState] = useState([]);
  useEffect(() => {
    /*componentDidMount*/

    return () => {
      //componentWillUnmout
      console.log('unmountApp');
    };
  }, []);

  return (
    <View>
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

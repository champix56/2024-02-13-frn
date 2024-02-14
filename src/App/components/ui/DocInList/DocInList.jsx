import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './DocInList.styles';
const initialState = true;
/**
 * Composant DocInList
 * @param {*} props props du composant DocInList
 * @returns {React.ReactNode} structure d'affichage components de DocInList
 */
const DocInList = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    //Mount
    console.log('DocInList mounted');
    return () => {
      //unmount
    };
  }, []);
  return (
    <View style={styles.DocInList} testID="DocInList">
      <Text>docInList</Text>
    </View>
  );
};

export default DocInList;

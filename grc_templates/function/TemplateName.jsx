import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './TemplateName.styles';
const initialState = true;
/**
 * Composant TemplateName
 * @param {*} props props du composant TemplateName
 * @returns {React.ReactNode} structure d'affichage components de TemplateName
 */
const TemplateName = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    //Mount
    console.log('TemplateName mounted');
    return () => {
      //unmount
    };
  }, []);
  return (
    <View style={styles.TemplateName} testID="TemplateName">
      <Text>templateName</Text>
    </View>
  );
};

export default TemplateName;

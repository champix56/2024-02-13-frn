import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import styles from './Button.styles';

function Button(props) {
  console.log(props);
  let classStyle = {};
  switch (props.type) {
    case 'cancel':
      classStyle = styles.cancelButton;
      break;
  }
  return (
    <TouchableOpacity
      //   style={{...styles.Button, backgroundColor: props.bgColor}}>
      style={{
        ...styles.Button,
        ...classStyle,
      }}>
      <Text style={styles.content}>{props.text}</Text>
    </TouchableOpacity>
  );
}
export default Button;

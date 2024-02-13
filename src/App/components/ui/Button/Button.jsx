import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import styles from './Button.styles';
import PropTypes from 'prop-types';
function Button(props) {
  console.log(props);
  return (
    <TouchableOpacity
      style={{
        ...styles.Button,
        backgroundColor: props.bgColor,
      }}>
      <Text style={styles.content}>{props.text}</Text>
    </TouchableOpacity>
  );
}
export default Button;
Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue', 'yellow']).isRequired,
};

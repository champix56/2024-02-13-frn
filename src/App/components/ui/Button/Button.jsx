import React from 'react';
import {Text, TouchableOpacity, Vibration} from 'react-native';
import styles from './Button.styles';
import PropTypes from 'prop-types';
function Button(props) {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={props.onButtonPress}
      style={[props.style, styles.Button, {backgroundColor: props.bgColor}]}>
      <Text style={styles.content}>{props.text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['red', 'tomato', 'skyblue', 'yellow']),
  onButtonPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: 'skyblue',
};
export default Button;

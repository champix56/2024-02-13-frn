import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['red', 'tomato', 'skyblue', 'yellow']),
};

Button.defaultProps = {
  bgColor: 'skyblue',
};
export default Button;

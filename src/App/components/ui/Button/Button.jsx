import React from 'react';
import {Text, View} from 'react-native';

function Button(props) {
  console.log(props);
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
}
export default Button;

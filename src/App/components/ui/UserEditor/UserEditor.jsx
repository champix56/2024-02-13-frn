import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './UserEditor.styles';
import PropTypes from 'prop-types';
import {DUMMY_USER} from '../../../interfaces/user';
import Button from '../Button/Button';
const initialState = DUMMY_USER;
/**
 * Composant UserEditor
 * @param {*} props props du composant UserEditor
 * @returns {React.ReactNode} structure d'affichage components de UserEditor
 */
const UserEditor = props => {
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    if (undefined !== props.user) {
      setUser(props.user);
    }
  }, [props.user]);
  return (
    <View style={styles.UserEditor} testID="UserEditor">
      <View style={styles.header} testID="UserEditor">
        <Text style={styles.headerText}>
          {user.id !== undefined ? `Edition user : ${user.id}` : 'Nouveau user'}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <TextInput onChangeText={t => {}} value="" placeholder="Nom" />
          <TextInput onChangeText={t => {}} value="" placeholder="Prénom" />
        </View>
        <TouchableOpacity style={styles.rightContent}>
          <Image
            source={
              user.photo !== undefined
                ? {uri: user.photo}
                : require('../../../../../assets/img/nophoto.png')
            }
            style={styles.photo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.formButtons}>
        <Button
          style={styles.button}
          text="cancel"
          bgColor="tomato"
          onButtonPress={e => {}}
        />
        <Button
          style={styles.button}
          text="save"
          bgColor="skyblue"
          onButtonPress={e => {
            Vibration.Vibrate(200);
          }}
        />
      </View>
    </View>
  );
};
UserEditor.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default UserEditor;

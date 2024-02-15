import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './UserViewer.styles';
import PropTypes from 'prop-types';
import {DUMMY_USER} from '../../../interfaces/user';
import Button from '../Button/Button';
const initialState = DUMMY_USER;
/**
 * Composant UserViewer
 * @param {*} props props du composant UserViewer
 * @returns {React.ReactNode} structure d'affichage components de UserViewer
 */
const UserViewer = props => {
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    if (undefined !== props.user) {
      setUser(props.user);
    } else {
      setUser(DUMMY_USER);
    }
  }, [props.user]);
  return (
    <View style={styles.UserViewer} testID="UserViewer">
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {user.id !== undefined ? `Edition user : ${user.id}` : 'Nouveau user'}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.textinputs}>{user.name}</Text>
          <Text style={styles.textinputs}>{user.firstName}</Text>
        </View>
        <View style={styles.rightContent}>
          <Image
            source={
              user.photo !== undefined
                ? {uri: user.photo}
                : require('../../../../../assets/img/nophoto.png')
            }
            style={styles.photo}
          />
        </View>
      </View>
    </View>
  );
};
UserViewer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }),
};
export default UserViewer;

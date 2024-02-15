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
import FiltrableDocumentsList from '../FiltrableDocumentsList/FiltrableDocumentsList';
const initialState = DUMMY_USER;
/**
 * Composant UserViewer
 * @param {*} props props du composant UserViewer
 * @returns {React.ReactNode} structure d'affichage components de UserViewer
 */
const UserViewer = props => {
 
  return (
    <View style={styles.UserViewer} testID="UserViewer">
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {props.user.id !== undefined ? `Edition user : ${props.user.id}` : 'Nouveau user'}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.textinputs}>{props.user.name}</Text>
          <Text style={styles.textinputs}>{props.user.firstName}</Text>
        </View>
        <View style={styles.rightContent}>
          <Image
            source={
              props.user.photo !== undefined
                ? {uri: props.user.photo}
                : require('../../../../../assets/img/nophoto.png')
            }
            style={styles.photo}
          />
        </View>
      </View>
      <FiltrableDocumentsList documents={props.documents} />
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
  documents: PropTypes.array.isRequired,
};
export default UserViewer;

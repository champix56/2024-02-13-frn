import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './UserView.styles';
import FiltrableDocumentsList from '../FiltrableDocumentsList/FiltrableDocumentsList';
const initialState = true;
/**
 * Composant UserView
 * @param {*} props props du composant UserView
 * @returns {React.ReactNode} structure d'affichage components de UserView
 */
const UserView = props => {
  return (
    <View style={styles.UserEditor} testID="UserEditor">
      <View style={styles.header} testID="UserEditor">
        <Text style={styles.headerText}>{`user : ${props.user.id}`}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.names}>{props.user.name}</Text>
          <Text style={styles.names}>{props.user.firstName}</Text>
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

export default UserView;

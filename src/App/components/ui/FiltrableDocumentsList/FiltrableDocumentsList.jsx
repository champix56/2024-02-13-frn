import {Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FiltrableDocumentsList.styles';
import ListDoc from '../../layout/ListDoc/ListDoc';
import DocInList from '../DocInList/DocInList';
const initialState = '';
/**
 * Composant FiltrableDocumentsList
 * @param {*} props props du composant FiltrableDocumentsList
 * @returns {React.ReactNode} structure d'affichage components de FiltrableDocumentsList
 */
const FiltrableDocumentsList = props => {
  const [filterValue, setFilterValue] = useState(initialState);

  return (
    <View
      style={{...props.styles, ...styles.FiltrableDocumentsList}}
      testID="FiltrableDocumentsList">
      <TextInput
        placeholder="recherche"
        value={filterValue}
        onChangeText={newValue => {
          setFilterValue(newValue);
        }}
      />
      <ListDoc>
        {/* <DocInList type="NOICON" titre="Nouveau" /> */}
        {props.documents
          .filter(e => {
            return (
              e.type.toLowerCase().includes(filterValue.toLowerCase()) ||
              e.titre.toLowerCase().includes(filterValue.toLowerCase())
            );
          })
          .map((e, i) => {
            return <DocInList key={'dil' + e.id} {...e} />;
          })}
      </ListDoc>
    </View>
  );
};

export default FiltrableDocumentsList;

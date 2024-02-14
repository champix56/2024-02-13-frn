import {ScrollView} from 'react-native';
import React from 'react';
import styles from './ListDoc.styles';
interface IListDocProps {
  children: React.ReactElement | Array<React.ReactElement>;
}
/**
 * Composant ListDoc
 * @param {*} props props du composant ListDoc
 * @returns {React.ReactNode} structure d'affichage components de ListDoc
 */
const ListDoc: React.FC<IListDocProps> = props => {
  return (
    <ScrollView style={styles.ListDoc} testID="ListDoc">
      {props.children}
    </ScrollView>
  );
};

export default ListDoc;

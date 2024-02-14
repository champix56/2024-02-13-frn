import {View} from 'react-native';
import React from 'react';
import styles from './TemplateName.styles';
interface ITemplateNameProps {
  children: React.ReactElement | Array<React.ReactElement>;
}
/**
 * Composant TemplateName
 * @param {*} props props du composant TemplateName
 * @returns {React.ReactNode} structure d'affichage components de TemplateName
 */
const TemplateName: React.FC<ITemplateNameProps> = props => {
  return (
    <View style={styles.TemplateName} testID="TemplateName">
      {props.children}
    </View>
  );
};

export default TemplateName;

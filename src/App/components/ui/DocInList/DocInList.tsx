import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './DocInList.styles';
/**
 * Composant DocInList
 * @param {*} props props du composant DocInList
 * @returns {React.ReactNode} structure d'affichage components de DocInList
 */
interface IDocInListProps {
  titre: string;
  type: 'PDF' | 'IMG' | 'PPT' | 'NOICON';
  date?: string;
}

const DocInList: React.FC<IDocInListProps> = props => {
  let icon = undefined;
  switch (props.type) {
    case 'PDF':
      icon = require('../../../../../assets/img/icon_pdf.png');
      break;
    case 'PPT':
      icon = require('../../../../../assets/img/icon_ppt.png');
      break;
    default:
      icon = require('../../../../../assets/img/icon_img.png');
      break;
  }
  return (
    <TouchableOpacity style={styles.DocInList} testID="DocInList">
      <View style={styles.container}>
        {props.type !== 'NOICON' && (
          <View style={styles.imageContainer}>
            <Image source={icon} style={styles.icon} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.titre}>{props.titre}</Text>
          {undefined !== props.date && (
            <Text style={styles.date}>en date du :{props.date}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default DocInList;

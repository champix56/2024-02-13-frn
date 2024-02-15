import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  UserEditor: {},
  header: {alignItems: 'center'},
  headerText: {fontWeight: '900', fontSize: 32},
  content: {flexDirection: 'row'},
  leftContent: {flexGrow: 1},
  rightContent: {padding: 10},
  photo: {
    width: 120,
    height: 120,
  },
  formButtons: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {width: '45%'},
});
export default styles;

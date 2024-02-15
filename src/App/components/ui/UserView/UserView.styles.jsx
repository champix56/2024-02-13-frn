import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  UserEditor: {},
  names: {fontWeight: '500', fontSize: 28},
  header: {alignItems: 'center'},
  headerText: {fontWeight: '900', fontSize: 32},
  content: {flexDirection: 'row'},
  leftContent: {flexGrow: 1, justifyContent: 'center'},
  rightContent: {padding: 10},
  photo: {
    width: 120,
    height: 120,
  },
  formButtons: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {width: '45%'},
  scrollSection: {height: 200},
});

export default styles;

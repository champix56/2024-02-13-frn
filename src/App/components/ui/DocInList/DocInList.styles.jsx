import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  DocInList: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  container: {flexDirection: 'row'},
  imageContainer: {padding: 10},
  icon: {width: 72, height: 72},
  textContainer: {flexGrow: 1, alignItems: 'center', justifyContent: 'center'},
  titre: {fontWeight: '900', fontSize: 24},
  date: {},
});
export default styles;

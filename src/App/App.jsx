import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './App.styles';
import Button from './components/ui/Button/Button';
import DocInList from './components/ui/DocInList/DocInList';
import ListDoc from './components/layout/ListDoc/ListDoc';
import {REST_RESSOURCES, REST_URL} from './config/config';
import {store} from './store/store';
import UserEditor from './components/ui/UserEditor/UserEditor';
import UserView from './components/ui/UserView/UserView';
import {update} from './store/userSlice';
function App() {
  const [user, setUser] = useState({});
  const [documents, setDocuments] = useState([]);
  const [filterValue, setfFilterValue] = useState('');
  useEffect(() => {
    /*componentDidMount*/
    const pruser = fetch(`${REST_URL}${REST_RESSOURCES.users}/0`).then(r => {
      console.log(r);
      return r.json();
    });
    const prdoc = fetch(
      `${REST_URL}${REST_RESSOURCES.documents}?userId=0`,
    ).then(r => {
      console.log(r);
      return r.json();
    });

    Promise.all([pruser, prdoc]).then(arrContenus => {
      setUser(arrContenus[0]);
      setDocuments(arrContenus[1]);
    });

    return () => {
      //componentWillUnmout
      console.log('unmountApp');
    };
  }, []);

  return (
    <View>
      <Text>
        {user.name} {user.firstName} / {documents.length} / {filterValue}
      </Text>
      {/* <UserEditor
        user={user}
        onCancel={() => {}}
        onSave={updatedUser => {
          setUser(updatedUser);
        }}
      /> */}
      <UserView user={user} documents={documents} />
      {/*<TextInput
        placeholder="recherche"
        value={filterValue}
        onChangeText={newValue => {
          setfFilterValue(newValue);
        }}
      />
      <ListDoc>
        <DocInList type="NOICON" titre="Nouveau" />
        {/*documents
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
      */}
    </View>
  );
}

export default App;

import {View, Text} from 'react-native';
import React from 'react';
// import UserViewer from './components/ui/UserViewer/UserViewer.stored';
import {Provider} from 'react-redux';
import {store} from './store/store';
import UserEditor from './components/functionnal/UserEditor/UserEditor.stored';
import UserViewer from './components/ui/UserViewer/UserViewer.stored';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <UserEditor />
        <UserViewer  />
      </View>
    </Provider>
  );
};

export default App;

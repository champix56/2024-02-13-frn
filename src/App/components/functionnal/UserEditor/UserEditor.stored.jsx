import {View, Text} from 'react-native';
import React from 'react';
import UserEditorUnconected from './UserEditor';
import UserViewer from '../../ui/UserViewer/UserViewer';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentUser} from '../../../store/currentUser';
const UserEditor = props => {
  const user = useSelector(storeState => {
    return storeState.user;
  });
  const dispatchDuStore = useDispatch();
  return (
    <UserEditorUnconected
      onCancel={props.onCancel}
      user={user}
      onSave={newUser => {
        dispatchDuStore(updateCurrentUser(newUser));
      }}
    />
  );
};
UserViewer.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UserEditor;

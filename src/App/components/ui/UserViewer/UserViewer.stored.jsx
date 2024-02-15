import React from 'react';
import UserViewerUnconnected from './UserViewer';
import { useSelector } from 'react-redux';
const UserViewer = () => {
   const user= useSelector(storeState=>{return storeState.user})
   const documents= useSelector(storeState=>{return storeState.documents})
  return (
    <UserViewerUnconnected
      user={user}
      documents={documents}
    />
  );
};

export default UserViewer;

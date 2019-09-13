/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import AppNavigator from './src/navigator/Navigator'

  global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
  global.FormData = global.originalFormData ?
    global.originalFormData :
    global.FormData;
  global.Blob = global.originalBlob ?
    global.originalBlob :
    global.Blob;
  global.FileReader = global.originalFileReader ?
    global.originalFileReader :
    global.FileReader;
    
const App = () => {

  
  return (

  <AppNavigator/>

  );
};



export default App;

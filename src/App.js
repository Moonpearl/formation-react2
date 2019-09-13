import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './redux/store';
import PersonPage from './components/PersonPage/PersonPage';
import PersonContainer from './redux/containers/PersonContainer';

function App() {
  return (
    <Provider store={store}>
      <PersonContainer />
    </Provider>
  );
}

export default App;

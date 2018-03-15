import { AppRegistry } from 'react-native';
import App from './App';


import configureStore from './App/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import AppReducer from './App/reducers';

const confStore = configureStore();

const RNRedux = () => {
  <Provider store={confStore.store}>
    <App/>
  </Provider>
}

AppRegistry.registerComponent('MPLO', () => RNRedux);

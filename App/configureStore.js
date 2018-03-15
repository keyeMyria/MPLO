
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate, persistReducer } from 'redux-persist';
import AppReducer from './reducers/index';

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
  );

  const persistConfig = {    
    key : 'root',
    storage : AsyncStorage,
//    whitelist:['user'],
  }

  
  const persistedReducer = persistReducer(persistConfig, AppReducer);
  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  // persistStore(
  //   store,
  //   {
  //     storage: AsyncStorage,
  //     whitelist:['landing', 'user'],
  //   },
  //   onCompletion);

  return { store, persistor };
}

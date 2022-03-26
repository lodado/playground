import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { asyncLoadingReducer, modalReducer } from './reducer';
import { rootSaga } from './saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    asyncLoadingReducer,
    modalReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

const rootStore = configureStore();

export type RootStoreType = ReturnType<typeof rootStore.getState>;
export default rootStore;

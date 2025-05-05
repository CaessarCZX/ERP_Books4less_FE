import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './states/user';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import AppConfig from '../config';

const encryptor = encryptTransform({
  secretKey: AppConfig.reduxSecretKey!,
  onError: (e) => {
    if (AppConfig.isDevelopmenMode) console.error('Encrypt error:', e);
  },
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [encryptor],
  whitelist: ['user', 'language'],
};

const rootReducer = combineReducers({
  user: userSliceReducer,
});

type RootReducerType = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducerType>(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

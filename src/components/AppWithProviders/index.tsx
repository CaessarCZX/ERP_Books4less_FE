import { FC, PropsWithChildren, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../context/store';
import QueryProvider from '../QueryProvider/QueryProvider';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RouterApp from '../../router';

const AppWithProviders: FC<PropsWithChildren> = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryProvider>
            <BrowserRouter>
              <RouterApp />
            </BrowserRouter>
            <ToastContainer />
          </QueryProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};
export default AppWithProviders;

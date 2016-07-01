import React from 'react';
import { Landing } from './containers/landing';
import { Provider } from 'react-redux';
import { store } from './store';

export const Root = () => (
  <Provider store={store}>
    <Landing />
  </Provider>
);

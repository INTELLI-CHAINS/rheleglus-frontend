import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/grid/bootstrap-grid.scss'
import 'assets/styles/main.scss'
import Provider from 'common/components/common/Provider';
import AppWrapper from 'AppWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

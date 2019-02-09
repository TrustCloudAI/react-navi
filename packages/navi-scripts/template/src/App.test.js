import * as Navi from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routes from './routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const navigation = Navi.createMemoryNavigation({
    routes,
    url: '/'
  });

  ReactDOM.render(
    <NavProvider navigation={navigation}>
      <App />
    </NavProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

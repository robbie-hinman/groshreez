import React from 'react';
import ReactDOM from 'react-dom';
import { StyledApp as App } from './App';

it('renders without crashing', () => {
  const myProps = { addModalIsOpen: false, toggleAddModal: () => true };
  const div = document.createElement('div');
  ReactDOM.render(<App {...myProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

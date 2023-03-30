import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContextProvider } from './components/Global/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormContextProvider>
        <App />
  </FormContextProvider>


);


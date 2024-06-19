import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextShare from './components/ContextShare';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ContextShare>

      <App />

    </ContextShare>

  </React.StrictMode>
);


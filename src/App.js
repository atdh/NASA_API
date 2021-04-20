import './App.css';
import React from 'react';

import{ BrowserRouter, Route } from 'react-router-dom';
import PhotoA from './components/PhotoA';
import LabelA from './components/LabelA';

export default function App(){
  return(
    <BrowserRouter>
      <div className="app">
        <Route component={LabelA} path="/" exact/>
        <Route component={PhotoA} path="/photo" />
        

      </div>
      

    </BrowserRouter>
      

    
  );
};

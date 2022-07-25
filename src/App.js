import React from 'react';
import './App.css';

import {Routes,
        Route,
       
      } from "react-router-dom";
import Question from './Question';
import Index from './indexxx';
import Indexx from './indexxxx';




function App() {
  return (
    <div className="App">    
<Routes>

    <Route path="/" element={<Index/>}/>
    <Route path='/question' element={<Indexx/>}/>
    <Route path='/add-question' element={<Question/>}/>
</Routes>


    </div>
  );
}

export default App;

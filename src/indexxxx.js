import React from 'react';


import "./indexxx.css";
import MainQuestion from './MainQuestion';
import { Sidebar } from './Sidebar';

function Indexx() {
    return (
        <div className='stack-index'>
            <div className="stack-index-content">
                  
            <Sidebar/>
            <MainQuestion/>
            </div>
         </div>
    );
}

export default Indexx
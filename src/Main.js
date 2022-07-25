import { FilterList } from '@mui/icons-material';
import React from 'react';

// import AllQuestions from './AllQuestions';
import "./Main.css";
import { useNavigate } from 'react-router-dom';

import AllQuestions from './AllQuestions';
function Main() {

    const navigate=useNavigate();
    return (
        <div className='main'>
            
        <div className='main-content'>
            
        <div className='main-top'>
                <h2>ALL Question</h2>
            <button onClick={()=>navigate("/add-question")}>Ask Question</button>
                 
         </div>
       <div className='main-des'>
            <p>All Question stats</p>
            <div className='main-filter'>
                <div className='main-tabs'>
                    <div className='main-tab'>
                        <a>Newest</a>
                    </div>
                    <div className='main-tab'>
                        <a>Active</a>
                    </div>
                    <div className='main-tab'>
                        <a>More</a>
                    </div>
                </div>
               
                
                <div className='main-filter-item'>
                        <FilterList/>
                        <p>Filter</p>
                </div>
            </div>
            </div>
            </div>
       <div className='questions'>
        <div className='question'>
              <AllQuestions/>
              <AllQuestions/>   
              <AllQuestions/> 
              <AllQuestions/> 
        </div>
       </div>
         </div>

        
    );
}

export default Main
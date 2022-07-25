import React from 'react';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';




function Header() {
    return (
      
            <header>
            <div className='header-container'>
            <div className='header-left'>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
                    alt='logo'/>
                    </Link> 
           
            
          
                   
                    <h3>Products</h3>
            </div>
         <div className='header-middle'>
                   <div className='header-search-container'>
                    <SearchIcon/>
                    <input type="text" placeholder="Search.."/>
                </div>
         </div>
         <div className='header-right'>
                <div className='header-right-container'>

                  <InboxIcon/> 
                  <Avatar/> 
                </div>
         </div>
            </div>
        </header>
        
        
    );
}

export default Header
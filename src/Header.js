import React from 'react';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material';




function Header() {
    return (
      
            <header>
            <div className='header-container'>
            <div className='header-left'>
            <img src='https://www.linuxadictos.com/wp-content/uploads/stack-overflow.jpg'
                    alt='logo'/>
           
            
          
                   
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
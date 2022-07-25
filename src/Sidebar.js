import React from 'react';
import "./Sidebar.css";
// import { Link } from "react-router-dom";
import { Public, Stars, Work } from "@mui/icons-material";


export function Sidebar() {
  return (
    <div className="sidebar">
       
       
        <div className="sidebar-container">
              
              
              <div className="sidebar-options">
                
                
                 <div className="sidebar-option">
                   <a>Home</a>
                </div>


                <div className="sidebar-option">
                  <a>PUBLIC</a>
                  <div className="link">
                    <div className="link-tag">
                      <Public />
                      <a>Question</a>
                    </div>
               <div className="tags">
                      <p>Tags</p>
                      <p>Users</p>
                    </div>
                  </div>
                </div>


                <div className="sidebar-option">
                     <p>COLLECTIVES</p>
                  <div className="link">
                    <div className="link-tag">
                      <Stars />
                      <a>Explore Collective</a>
                    </div>
                  </div>
                </div>
               


                <div className="sidebar-option">
                      <p>FIND A JOB</p>
                  <div className="link">
                    <div className="link-tag">
                      <a>Jobs</a>
                      {/* <Link>Company</Link> */}
                    </div>
                  </div>
                </div>


                <div className="sidebar-option">
                  <p>TEAMS</p>
                  <div className="link-tag">
                    <Work />
                    <a>Companies</a>
                  </div>
             </div>
  



  </div>
  </div>
  </div>
  );}
  


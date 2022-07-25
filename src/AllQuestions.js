import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import "./AllQuestions.css"
function AllQuestions() {
    return (
        <div className='all-question'>
            <div className='all-question-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                        <div className='all-option'>
                            <p>0</p>
                            <span>Votes</span>
                        </div>
                        <div className='all-option'>
                            <p>0</p>
                            <span>Answer</span>
                        </div>
                        <div className='all-option'>
                         
                            <small>0View</small>
                        </div>
                    </div>
                </div>
                <div className='question-answer'>
                    <Link to='/question'>This is question Title?</Link>
                    <div style={{ width: "90%" }}>
                        <div>
                            This is answer
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span className='question-tags'>
                            react
                        </span>
                        <span className='question-tags'>
                            antd
                        </span>
                        <span className='question-tags'>
                            frontend
                        </span>
                    </div>
                    <div className='author'>
                        <small>Timestamp</small>
                        <div className='author-details'>
                            <Avatar />
                            <p>User name</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AllQuestions;
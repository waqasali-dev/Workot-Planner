import React from 'react'
import './levels.css'
import { Link } from 'react-router-dom';

const levels = () => {
    return (
        <div className='levels'>
            <Link to="/workout-plan" className='level' onClick={() => localStorage.setItem('level', 'beginner')}>
                <div>
                    <h1>Beginner</h1>
                </div>
            </Link>
            <Link to="/workout-plan" className='level' onClick={() => localStorage.setItem('level', 'intermediate')}>
                <div>
                    <h1>Intermediate</h1>
                </div>
            </Link>
            <Link to="/workout-plan" className='level' onClick={() => localStorage.setItem('level', 'expert')}>
                <div>
                    <h1>Expert</h1>
                </div>
            </Link>
        </div>
    )
}

export default levels
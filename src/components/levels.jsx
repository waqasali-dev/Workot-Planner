import React from 'react'
import './levels.css'
import { Link } from 'react-router-dom';

const levels = ({ setLevel }) => {
    return (
        <div className='levels'>
            <Link to="/workouts">
                <div className='level' onClick={() => setLevel('beginner')}>
                    <h1>Beginner</h1>
                </div>
            </Link>
            <Link to="/workouts">
                <div className='level' onClick={() => setLevel('intermediate')}>
                    <h1>Intermediate</h1>
                </div>
            </Link>
            <Link to="/workouts">
                <div className='level' onClick={() => setLevel('expert')}>
                    <h1>Expert</h1>
                </div>
            </Link>
        </div>
    )
}

export default levels
import React from 'react'
import './levels.css'
import { Link } from 'react-router-dom';

const levels = ({ setLevel }) => {
    return (
        <div className='levels'>
            <Link to="/workout-plan" className='level'>
                <div onClick={() => setLevel('beginner')}>
                    <h1>Beginner</h1>
                </div>
            </Link>
            <Link to="/workout-plan" className='level'>
                <div onClick={() => setLevel('intermediate')}>
                    <h1>Intermediate</h1>
                </div>
            </Link>
            <Link to="/workout-plan" className='level'>
                <div onClick={() => setLevel('expert')}>
                    <h1>Expert</h1>
                </div>
            </Link>
        </div>
    )
}

export default levels
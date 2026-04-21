import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import GradeIcon from '@mui/icons-material/Grade';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';



export default function Sidebar({ planChecker }) {
    return (
        <div className='sidebar'>
            <div className='sidebar-links'>
                <Link className='level-button link' to="/"><GradeIcon className='icon' />Levels</Link>
                <Link className='plan-button link' to="/workout-plan"><FitnessCenterIcon className='icon' />Planner</Link>
                <Link className='schedule-button link' to="/schedule"><CalendarTodayIcon className='icon' />Schedule</Link>
                <Link className='start-button link' to="/start-workout"><AddIcon className='icon' />Start Workout</Link>
            </div>
        </div>
    )
}
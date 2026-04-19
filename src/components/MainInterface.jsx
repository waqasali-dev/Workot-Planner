import React, { useState } from 'react';
import Workouts from './workouts';
import Exercisetype from './Exercisetype';
import './Maininterface.css';


function MainInterface() {
    const level = localStorage.getItem('level') || 'beginner';
    const [day, setDay] = useState('monday');
    const [type1, setType1] = useState('abs');
    const [type2, setType2] = useState('');
    const [dualMuscle, setDualMuscle] = useState(false);
    const [selectedWorkouts, setSelectedWorkouts] = useState({
        monday: {
            type: [],
            workouts: [],
        },
        tuesday: {
            type: [],
            workouts: [],
        },
        wednesday: {
            type: [],
            workouts: [],
        },
        thursday: {
            type: [],
            workouts: [],
        },
        friday: {
            type: [],
            workouts: [],
        },
        saturday: {
            type: [],
            workouts: [],
        },
        sunday: {
            type: [],
            workouts: [],
        },
    });
    let planChecker = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    }
    const exerciseTypes = ['abs', 'chest', 'back', 'legs', 'arms', 'shoulders', 'cardio'];
    return (
        <div className='main-interface'>
            {/* this is prompt section, whatever written here is what the user wants now: 
            */}
            <div className='plan-panel'>
                <p className='day-selector'>
                    Day:
                    <select className='day-dropdown' onChange={(e) => {
                        setDay(e.target.value)
                    }}>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </p>
                <div className='workout-type'>
                    <p>Dual Muscle Group :
                        <span className='dual-muscle-group'>
                            <input
                                type="checkbox"
                                checked={dualMuscle}
                                onChange={() => {
                                    if (dualMuscle) {
                                        setDualMuscle(false);
                                        setType2('');
                                        if (planChecker[day]) {
                                            setSelectedWorkouts((prev) => ({
                                                ...prev,
                                                [day]: {
                                                    ...prev[day],
                                                    type: [],
                                                    workouts: [],
                                                },
                                            }))
                                        }
                                    } else {
                                        setDualMuscle(true);
                                    }
                                }}
                            />
                        </span>
                    </p>

                    <p className='type-1'>
                        <Exercisetype
                            id="Muscle Group-1"
                            type={exerciseTypes}
                            setType={setType1}
                            postselected={[type2]}
                            onChange={(e) => {
                                setType1(e.target.value)
                                setSelectedWorkouts((prev) => ({
                                    ...prev,
                                    [day]: {
                                        ...prev[day],
                                        type: [e.target.value],
                                    },
                                }))
                            }}
                        />
                    </p>

                    {dualMuscle && (
                        <p className='type-2'>
                            <Exercisetype
                                id="Muscle Group-2"
                                type={exerciseTypes}
                                setType={setType2}
                                postselected={[type1]}
                                onChange={(e) => {
                                    setType2(e.target.value)
                                    setSelectedWorkouts((prev) => ({
                                        ...prev,
                                        [day]: {
                                            ...prev[day],
                                            type: [type1, e.target.value],
                                        },
                                    }))
                                }}
                            />
                        </p>
                    )}
                </div>
            </div>
            <div className='workout-list'>
                <Workouts
                    level={level}
                    type1={type1}
                    day={day}
                    planChecker={planChecker[day]}
                    setSelectedWorkouts={setSelectedWorkouts}
                />
                {
                    dualMuscle && (
                        <Workouts
                            level={level}
                            type1={type2}
                            day={day}
                            planChecker={planChecker[day]}
                            setSelectedWorkouts={setSelectedWorkouts}
                        />
                    )
                }
            </div>
            <div className='workout-plan'>

                {selectedWorkouts[day].workouts.map((workout) => (
                    <div
                        className="Workout-card"
                        key={workout.id}>
                        {/* let's add cross sign to remove workouts*/}
                        <span
                            className="cross-sign"
                            onClick={() => {
                                setSelectedWorkouts((prev) => ({
                                    ...prev,
                                    [day]: {
                                        ...prev[day],
                                        workouts: prev[day].workouts.filter((w) => w.id !== workout.id),
                                    },
                                }))
                            }}>✕</span>
                        <h2>{workout.name}</h2>
                        <p>Reps: {workout.reps}</p>
                        <p>Sets: {workout.sets}</p>
                        <p>Category: {workout.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainInterface


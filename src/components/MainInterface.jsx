import React, { useState } from 'react';
import Workouts from './workouts';
import Exercisetype from './Exercisetype';
import './Maininterface.css';


function MainInterface({ level }) {
    const [day, setDay] = useState('monday');
    const [type1, setType1] = useState('abs');
    const [type2, setType2] = useState('');
    const [dualMuscle, setDualMuscle] = useState(false);
    console.log(day);
    const exerciseTypes = ['abs', 'chest', 'back', 'legs', 'arms', 'shoulders', 'cardio'];
    return (
        <div className='main-interface'>
            <div className='plan-panel'>
                <p className='day-selector'>
                    Day:
                    <select className='day-dropdown' onChange={(e) => setDay(e.target.value)}>
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
                    <p>Dual Muscle Group <span className='dual-muscle-group'><input type="checkbox" checked={dualMuscle} onChange={() => {
                        if (dualMuscle) {
                            setDualMuscle(false);
                            setType2('');
                        } else {
                            setDualMuscle(true);
                        }
                    }} /></span></p>

                    <p className='type-1'>
                        <Exercisetype
                            id="Muscle Group-1"
                            type={exerciseTypes}
                            setType={setType1}
                            postselected={[type2]}
                            onChange={(e) => setType1(e.target.value)}
                        />
                    </p>

                    {dualMuscle && (
                        <p className='type-2'>
                            <Exercisetype
                                id="Muscle Group-2"
                                type={exerciseTypes}
                                setType={setType2}
                                postselected={[type1]}
                            />
                        </p>
                    )}
                </div>
            </div>
            <div className='workout-list'>
                <Workouts level={level} type1={type1} type2={type2} />
            </div>
        </div>
    )
}

export default MainInterface


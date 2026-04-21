import React from "react";
import Sidebar from "./Sidebar";
import { useWorkout } from './context/WorkoutContext';
import './StartWorkout.css';

function StartWorkout() {
    let weekDay = new Date().getDay();

    if (weekDay === 0) weekDay = "sunday";
    else if (weekDay === 1) weekDay = "monday";
    else if (weekDay === 2) weekDay = "tuesday";
    else if (weekDay === 3) weekDay = "wednesday";
    else if (weekDay === 4) weekDay = "thursday";
    else if (weekDay === 5) weekDay = "friday";
    else if (weekDay === 6) weekDay = "saturday";

    const { selectedWorkouts, setSelectedWorkouts } = useWorkout();

    let todayWorkout = selectedWorkouts[weekDay]?.workouts;
    console.log(selectedWorkouts[weekDay]);

    console.log(todayWorkout);
    console.log("length:", todayWorkout.length);
    return (
        <div className="flex-wrapper">
            <Sidebar />
            <div className="page-content">
                <h1 className="page-title">{weekDay}</h1>
                <div className="workout-container">
                    {todayWorkout.length > 0 ? (
                        todayWorkout.map((workout) => (
                            <div className={`card-item ${workout.done ? "done" : ""}`} key={workout.id}>
                                <h3>{workout.name}</h3>
                                <p>Sets: {workout.sets}</p>
                                <p>Reps: {workout.reps}</p>
                                <button className="done-button" onClick={() => {
                                    setSelectedWorkouts((prevWorkouts) => ({
                                        ...prevWorkouts,
                                        [weekDay]: {
                                            ...prevWorkouts[weekDay],
                                            workouts: prevWorkouts[weekDay].workouts.map((w) => {
                                                if (w.id === workout.id) {
                                                    return {
                                                        ...w,
                                                        done: true,
                                                    };
                                                }
                                                return w;
                                            }),
                                        },
                                    }));
                                }}>Done</button>
                            </div>
                        ))
                    ) : (
                        <p>No workout scheduled for today</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StartWorkout;
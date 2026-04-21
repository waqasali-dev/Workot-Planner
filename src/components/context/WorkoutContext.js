// context/WorkoutContext.js
import { createContext, useState, useContext } from 'react';

const WorkoutContext = createContext();

// Create Provider Component
export function WorkoutProvider({ children }) {
    const [selectedWorkouts, setSelectedWorkouts] = useState({
        monday: { type: [], workouts: [] },
        tuesday: { type: [], workouts: [] },
        wednesday: { type: [], workouts: [] },
        thursday: { type: [], workouts: [] },
        friday: { type: [], workouts: [] },
        saturday: { type: [], workouts: [] },
        sunday: { type: [], workouts: [] },
    });

    return (
        <WorkoutContext.Provider value={{ selectedWorkouts, setSelectedWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    );
}

// Custom Hook for easier access
export function useWorkout() {
    return useContext(WorkoutContext);
}
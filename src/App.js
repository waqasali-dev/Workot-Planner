import './App.css';
import Levels from './components/levels';
import MainInterface from './components/MainInterface';
import { Routes, Route } from 'react-router-dom';
import StartWorkout from './components/StartWorkout';
import { WorkoutProvider } from './components/context/WorkoutContext';


// now lets add navigation between levels and workouts

function App() {

  return (
    <div className="App">
      <WorkoutProvider>
        <header className="App-header">
          <p className='App-title'>Workout Planner</p>
        </header>
        <Routes>
          <Route path="/" element={<Levels />} />
          <Route path="/workout-plan" element={<MainInterface />} />
          <Route path="/start-workout" element={<StartWorkout />} />
        </Routes>
      </WorkoutProvider>
    </div>
  );
}

export default App;

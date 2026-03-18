import './App.css';
import { useState } from 'react';
import Levels from './components/levels';
import MainInterface from './components/MainInterface';
import { Routes, Route } from 'react-router-dom';

// now lets add navigation between levels and workouts

function App() {
  const [level, setLevel] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <p className='App-title'>Workout Planner</p>
      </header>
      <Routes>
        <Route path="/" element={<Levels setLevel={setLevel} />} />
        <Route path="/workout-plan" element={<MainInterface level={level} />} />
      </Routes>
    </div>
  );
}

export default App;

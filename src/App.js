import './App.css';
import { useState } from 'react';
import Levels from './components/levels';
import Workouts from './components/workouts';
import { Routes, Route } from 'react-router-dom';

// now lets add navigation between levels and workouts

function App() {
  const [level, setLevel] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <p>Workout Planner</p>
      </header>
      <Routes>
        <Route path="/" element={<Levels setLevel={setLevel} />} />
        <Route path="/workouts" element={<Workouts level={level} />} />
      </Routes>
    </div>
  );
}

export default App;

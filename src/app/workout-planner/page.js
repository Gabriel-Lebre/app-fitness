"use client";
import { useState } from "react";

export default function WorkoutPlanner() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");

  const addWorkout = () => {
    if (!exercise.trim()) return;
    setWorkouts([...workouts, { id: Date.now(), name: exercise }]);
    setExercise("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Workout Planner</h1>
        <div className="flex">
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="Enter exercise name"
            className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addWorkout}
            className="ml-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Add
          </button>
        </div>

        <ul className="mt-4">
          {workouts.map((workout) => (
            <li key={workout.id} className="p-2 bg-gray-700 rounded mt-2">
              {workout.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import './style.css';
import { config } from './config';
import { ThreeBackground } from './background/ThreeBackground';

// Import Web Components
import './components/HeaderComponent';
import './components/NavComponent';
import { ExerciseCard } from './components/ExerciseCard';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Background
  try {
    new ThreeBackground('bg-canvas');
  } catch (e) {
    console.error('Failed to initialize Three.js background', e);
  }

  // Render Exercises
  const exercisesContainer = document.getElementById('exercises-container');
  if (exercisesContainer) {
    config.exercises.forEach((exercise, index) => {
      const card = document.createElement('exercise-card') as ExerciseCard;
      card.data = { exercise, index: index + 1 };
      exercisesContainer.appendChild(card);
    });
  }
});

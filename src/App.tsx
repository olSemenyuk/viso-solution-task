import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { MealPage } from './pages/Meal';
import { SelectedRecipes } from './pages/SelectedRecipes';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="meal" element={<MealPage />} />
      <Route path="selected-recipes" element={<SelectedRecipes />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

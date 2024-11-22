import { combineReducers } from '@reduxjs/toolkit';
import mealReducer from './slices/mealSlice';

const rootReducer = combineReducers({
  meal: mealReducer
});

export default rootReducer;

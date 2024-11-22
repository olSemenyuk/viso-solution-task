import { ErrorResponse } from '@/api/responses/error.response';
import { GetMealsResponce } from '@/api/responses/get-meals.responce';
import { MealCategoryResponse } from '@/api/responses/meal-category.response';
import { getAllMealCategoriesUsecase } from '@/api/usecases/get-all-meal-categories.usecase';
import { getAllMealsUsecase } from '@/api/usecases/get-all-meals.usecase';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface MealState {
  error: ErrorResponse | null;
  success: boolean;
  loading: boolean;

  meals: GetMealsResponce[];
  selectedMeals: GetMealsResponce[];
  mealCategories: MealCategoryResponse[];
}

const initialState: MealState = {
  error: null,
  success: false,
  loading: false,

  meals: [],
  selectedMeals: [],
  mealCategories: []
};

export const getAllMealCategories = createAsyncThunk(
  'meal/getAllMealCategories',
  async (_, { rejectWithValue }) => {
    const [errorRes, userRes] = await getAllMealCategoriesUsecase();
    if (errorRes) {
      return rejectWithValue(errorRes);
    } else {
      return userRes;
    }
  }
);

export const getAllMeals = createAsyncThunk('meal/getAllMeals', async (_, { rejectWithValue }) => {
  const [errorRes, userRes] = await getAllMealsUsecase();
  if (errorRes) {
    return rejectWithValue(errorRes);
  } else {
    return userRes;
  }
});

export const MealSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MealState>) => {
    builder
      .addCase(getAllMealCategories.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllMealCategories.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as ErrorResponse;
      })
      .addCase(getAllMealCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.mealCategories = action.payload as MealCategoryResponse[];
      });
  }
});

export const { actions, reducer: mealReducer } = MealSlice;

export default mealReducer;

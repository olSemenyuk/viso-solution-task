import { getAllMealCategoriesUsecase } from './get-all-meal-categories.usecase';
import { getMealsByCategory } from './get-meals-by-category.usecase';

export const getAllMealsUsecase = async (): Promise<any> => {
  // [ErrorResponse | null, GetMealByCategoryResponce | undefined]
  const [err, categories] = await getAllMealCategoriesUsecase();

  if (err || !categories) {
    return [err, undefined];
  }

  const promises = categories.map((category) => getMealsByCategory(category.strCategory));

  const mealsByCategory = await Promise.all(promises);

  const errors = mealsByCategory.filter(([error]) => error !== null);

  if (errors.length > 0) {
    return [errors[0][0], undefined];
  }

  console.log(mealsByCategory);

  // const allMeals = mealsByCategory.map(([_, data]) => data).flat();

  // return [null, allMeals];
};

import { axiosInstance } from '@/utils/axiosConfig';
import { ErrorResponse } from '../responses/error.response';
import { MealCategoriesResponse } from '../responses/meal-categories.response';
import { MealCategoryResponse } from '../responses/meal-category.response';

export const getAllMealCategoriesUsecase = async (): Promise<
  [ErrorResponse | null, MealCategoryResponse[] | undefined]
> => {
  try {
    const { data } = await axiosInstance.get('?c=list');
    const { meals } = data as MealCategoriesResponse;

    return [null, meals];
  } catch (error: any) {
    return [error.response?.data as ErrorResponse, undefined];
  }
};

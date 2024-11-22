import { axiosInstance } from '@/utils/axiosConfig';
import { ErrorResponse } from '../responses/error.response';
import { GetAllMealsByCategoryResponce } from '../responses/get-all-meals-by-category.responce';
import { GetMealByCategoryResponce } from '../responses/get-meals.responce';

export const getMealsByCategory = async (
  category: string
): Promise<[ErrorResponse | null, GetMealByCategoryResponce[] | undefined]> => {
  try {
    const { data } = await axiosInstance.get(`?c=${category}`);
    const { meals } = data as GetAllMealsByCategoryResponce;

    return [null, meals];
  } catch (error: any) {
    return [error.response.data as ErrorResponse, undefined];
  }
};

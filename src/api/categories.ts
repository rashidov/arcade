import { axiosInstance } from './requests'
import { IGetCategoryData } from '../interfaces/categories'

export const categoriesApi = {
  getCategories: () =>
    axiosInstance.get<IGetCategoryData[]>('/api/ecommerce/categories', {
      params: {
        paginate: 0,
      },
    }),
}

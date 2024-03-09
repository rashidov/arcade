import { axiosInstance } from './requests'
import { IGetProductData } from '../interfaces/products'

export const productsApi = {
  getProducts: (categories: string[]) =>
    axiosInstance.get<IGetProductData[]>('/api/ecommerce/products', {
      params: {
        include: ['media'],
        categories,
      },
    }),
}

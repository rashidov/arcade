import { ICategory } from '../interfaces/categories'
import consolesCategory from '../assets/images/consoles_category.png'
import accessoriesCategory from '../assets/images/accessories_category.png'
import controllersCategory from '../assets/images/controllers_category.png'

export const MOCK_CATEGORIES: ICategory[] = [
  {
    type: 'consoles',
    title: 'Consoles',
    src: consolesCategory,
    description: '',
    id: 'consoles',
  },
  {
    type: 'accessories',
    title: 'Accessories',
    src: accessoriesCategory,
    description: '',
    id: 'accessories',
  },
  {
    type: 'controllers',
    title: 'Controllers',
    src: controllersCategory,
    description: '',
    id: 'controllers',
  },
]

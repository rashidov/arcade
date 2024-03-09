import { FC } from 'react'
import { CategoriesList } from './components/CategoriesList'
import { CategoriesDiscounts } from './components/CategoriesDiscounts'
import './style.scss'

export const Categories: FC = () => {
  return (
    <div className="categories">
      <CategoriesList />
      <CategoriesDiscounts />
    </div>
  )
}

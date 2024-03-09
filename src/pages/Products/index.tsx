import { FC } from 'react'
import { ProductsList } from './components/ProductList'
import { ProductPopup } from '../../features/ProductPopup'
import './style.scss'

export const Products: FC = () => {
  return (
    <div className="products">
      <ProductsList />
      <ProductPopup />
    </div>
  )
}

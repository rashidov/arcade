import { FC } from 'react'
import { MainLayout } from '../../../layouts/Main'
import { Discounts } from '../../../features/Discounts'

export const CategoriesDiscounts: FC = () => {
  return (
    <MainLayout.Container className="categories-discounts" style={{ backgroundColor: '#060506' }}>
      <Discounts />
    </MainLayout.Container>
  )
}

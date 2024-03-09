import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../store'
import { fetchProductsByCategory, openPopup } from '../../../store/products'
import { IProduct } from '../../../interfaces/products'
import { MainLayout } from '../../../layouts/Main'
import { Products } from '../../../features/Products'

export const ProductsList: FC = () => {
  const { category } = useParams<{ category: string }>()
  const dispatch = useAppDispatch()
  const products =
    useSelector<RootState, IProduct[] | undefined>((state) => state.productsStore.products[category!]) || []
  const loading = useSelector<RootState, boolean>((state) => state.productsStore.loading)

  useEffect(() => {
    if (!products.length) dispatch(fetchProductsByCategory(category!))
  }, [])

  const clickToProduct = (product: number) => {
    dispatch(openPopup({ product, category: category! }))
  }

  return (
    <MainLayout.Container>
      <Products loading={loading} products={products} onClickToProduct={clickToProduct} category={category!} />
    </MainLayout.Container>
  )
}

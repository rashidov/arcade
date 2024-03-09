import { FC } from 'react'
import { useSelector } from 'react-redux'
import { MainLayout } from '../../../layouts/Main'
import { RootState } from '../../../store'
import { ICategory } from '../../../interfaces/categories'
import { Loader } from '../../../ui-kit/Loader'
import { CategoryCard } from '../../../features/CatregoryCard'

export const CategoriesList: FC = () => {
  const categories = useSelector<RootState, ICategory[]>((state) => state.categoriesStore.categories)
  const loading = useSelector<RootState, boolean>((state) => state.categoriesStore.loading)
  return (
    <MainLayout.Container className="categories-list">
      {loading && <Loader />}
      {categories.map((category, index) => (
        <CategoryCard
          key={`${index}-${category.title}`}
          id={category.id}
          src={category.src}
          category={category.title}
        />
      ))}
    </MainLayout.Container>
  )
}

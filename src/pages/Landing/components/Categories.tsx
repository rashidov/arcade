import { MainLayout } from '../../../layouts/Main'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { ICategory } from '../../../interfaces/categories'
import { CategoryCard } from '../../../features/CatregoryCard'
import { Loader } from '../../../ui-kit/Loader'

export const Categories = () => {
  return (
    <MainLayout.Container className="landing-categories landing-section">
      <div className="landing-section-header">
        <MainLayout.Title text="SHOP BY CATEGORY" />
      </div>
      <div className="landing-categories-body">
        <CategoriesLoadingContainer />
        <CategoriesList />
      </div>
    </MainLayout.Container>
  )
}

const CategoriesList = () => {
  const categories = useSelector<RootState, ICategory[]>((state) => state.categoriesStore.categories.slice(0, 3))
  return (
    <>
      {categories.map((category) => (
        <CategoryCard
          key={`${category.id}-${category.title}`}
          src={category.src}
          category={category.title}
          id={category.id}
        />
      ))}
    </>
  )
}

const CategoriesLoadingContainer = () => {
  const loading = useSelector<RootState, boolean>((state) => state.categoriesStore.loading)
  return loading ? (
    <div className="landing-categories-body-loading_container">
      <Loader withoutWrapper />
    </div>
  ) : null
}

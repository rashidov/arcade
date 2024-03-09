import { FC } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface CategoryProps {
  id: string
  src: string
  category: string
}

export const CategoryCard: FC<CategoryProps> = ({ id, src, category }) => {
  return (
    <Link to={`/products/${id}`} className="category">
      <div className="category-img">
        <img alt={category} src={src} />
      </div>
      <span>{category}</span>
    </Link>
  )
}

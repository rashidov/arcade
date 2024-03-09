import { FC } from 'react'
import './style.scss'

interface LoaderProps {
  withoutWrapper?: boolean
}

export const Loader: FC<LoaderProps> = ({ withoutWrapper }) => {
  return withoutWrapper ? (
    <div className="loader" />
  ) : (
    <div className="loader_wrapper">
      <div className="loader" />
    </div>
  )
}

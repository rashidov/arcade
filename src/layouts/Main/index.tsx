import { forwardRef, HTMLAttributes, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'
import { TopBar } from '../../features/TopBar'
import { Footer } from '../../features/Footer'
import './style.scss'
import { useAppDispatch } from '../../store'
import { fetchCategories } from '../../store/categories'

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('layout-container', className)}>
        {children}
      </div>
    )
  },
)

interface TitleProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string
}
const Title = forwardRef<HTMLSpanElement, TitleProps>(({ text, className, ...props }, ref) => {
  return (
    <span ref={ref} {...props} className={cn('layout-title', className)}>
      {text}
    </span>
  )
})

export function MainLayout() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  return (
    <div className="layout">
      <TopBar />
      <div className="layout-divider" />
      <Outlet />
      <Footer />
    </div>
  )
}

MainLayout.Title = Title
MainLayout.Container = Container

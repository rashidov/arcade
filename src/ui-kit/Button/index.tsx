import { ButtonHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import './style.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  heightSize?: 'md' | 'lg'
  widthSize?: 'md' | 'lg'
  color?: 'purple' | 'white'
  text?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ heightSize = 'md', widthSize = 'md', color = 'purple', text, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn('button', props.className, `height_${heightSize}`, `width_${widthSize}`, color)}
      >
        {text || children}
      </button>
    )
  },
)

import { CSSProperties, FC, ReactNode } from 'react'
import cn from 'classnames'
import './style.scss'

const Text: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <span className="proposal_card-text" style={style}>
    {children}
  </span>
)

const Title: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <span className="proposal_card-title" style={style}>
    {children}
  </span>
)

interface ProposalCardProps {
  children: ReactNode
  color?: 'purple'
  style?: CSSProperties
  className?: string
}

function ProposalCard({ color = 'purple', children, style, className }: ProposalCardProps) {
  return (
    <div className={cn('proposal_card', color, className)} style={style}>
      {children}
    </div>
  )
}

ProposalCard.Title = Title
ProposalCard.Text = Text

export default ProposalCard

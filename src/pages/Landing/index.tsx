import { FC } from 'react'
import { Preview } from './components/Preview'
import { PreviewProducts } from './components/PreviewProducts'
import { Categories } from './components/Categories'
import { Discounts } from './components/Discounts'
import { SalesProposal } from './components/SalesProposal'
import cyber from '../../assets/images/cyber_background.png'
import './style.scss'

export const Landing: FC = () => {
  return (
    <div className="landing">
      <img alt="top background" src={cyber} className="landing-top_background" />
      <Preview />
      <PreviewProducts style={{ marginTop: '90px', marginBottom: '50px' }} />
      <SalesProposal />
      <Categories />
      <Discounts />
    </div>
  )
}

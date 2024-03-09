import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../../../layouts/Main'
import { Button } from '../../../ui-kit/Button'
import solder from '../../../assets/images/solder_background.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export const SalesProposal: FC = () => {
  const onSaleCategory = useSelector<RootState, string>((state) => state.categoriesStore.onSale)
  return (
    <MainLayout.Container className="landing-sales_proposal" style={{ background: `url(${solder})` }}>
      <span className="landing-sales_proposal-title">SPEND & SAVE</span>
      <span className="landing-sales_proposal-description">Save 20% when you spend more than $125</span>
      <Link to={`/products/${onSaleCategory}`}>
        <Button text="Shop Now" />
      </Link>
    </MainLayout.Container>
  )
}

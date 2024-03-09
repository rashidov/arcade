import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ProposalCard from '../ProposalCard'
import { Button } from '../../ui-kit/Button'
import discountFirstImg from '../../assets/images/discounts_1img.png'
import discountSecondImg from '../../assets/images/discounts_2img.png'
import discountThirdImg from '../../assets/images/discounts_3img.png'
import './style.scss'

export const Discounts: FC = () => {
  const onSaleCategory = useSelector<RootState, string>((state) => state.categoriesStore.onSale)
  return (
    <div className="discounts">
      <ProposalCard className="discounts-proposal">
        <ProposalCard.Text style={{ marginBottom: '26px' }}>THIS WEEK'S DEALS</ProposalCard.Text>
        <ProposalCard.Title style={{ fontSize: '140px' }}>10%</ProposalCard.Title>
        <ProposalCard.Title style={{ marginBottom: '42px', fontSize: '42px' }}>off all games</ProposalCard.Title>
        <Link to={`/products/${onSaleCategory}`}>
          <Button text="Shop Now" color="white" />
        </Link>
      </ProposalCard>
      <div className="discounts-collection">
        <img alt="Kira" className="discounts-collection-firstImg" src={discountFirstImg} />
        <img alt="Dead at last" className="discounts-collection-secondImg" src={discountSecondImg} />
        <img alt="chron" className="discounts-collection-thirdImg" src={discountThirdImg} />
      </div>
    </div>
  )
}

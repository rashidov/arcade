import { MainLayout } from '../../../layouts/Main'
import { Discounts as DiscountsFeature } from '../../../features/Discounts'

export const Discounts = () => {
  return (
    <MainLayout.Container className="landing-discounts">
      <DiscountsFeature />
    </MainLayout.Container>
  )
}

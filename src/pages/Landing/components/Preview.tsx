import { MainLayout } from '../../../layouts/Main'
import ProposalCard from '../../../features/ProposalCard'
import { Button } from '../../../ui-kit/Button'
import cyberKid from '../../../assets/images/cyber_kid.png'

export const Preview = () => {
  return (
    <MainLayout.Container className="landing-preview">
      <ProposalCard className="landing-preview-proposal">
        <ProposalCard.Text>Power up your game</ProposalCard.Text>
        <ProposalCard.Title>CYBER KID INFINITE</ProposalCard.Title>
        <ProposalCard.Text>Now Available on PC & Console</ProposalCard.Text>
        <Button text="Buy Now" color="white" />
      </ProposalCard>
      <div className="landing-preview-banner">
        <img alt="Cyber kid" src={cyberKid} />
      </div>
    </MainLayout.Container>
  )
}

import { FC } from 'react'
import mesh from '../../assets/images/mesh_backgorund.png'
import purple from '../../assets/images/purple_background.png'
import collection from '../../assets/images/collection_games.png'
import './style.scss'

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-newsletter" style={{ background: `url(${mesh})` }}>
        <span className="footer-newsletter-title">NEWSLETTER</span>
        <span className="footer-newsletter-description">
          Sign up to receive updates on new products and special offers
        </span>
        <div className="footer-newsletter-form">
          <span className="footer-newsletter-form-label">Email*</span>
          <input className="footer-newsletter-form-input" />
          <button className="footer-newsletter-form-button">Submit</button>
        </div>
      </div>
      <div className="footer-collection" style={{ background: `url(${purple})` }}>
        <img alt="collection games" src={collection} />
      </div>
    </div>
  )
}

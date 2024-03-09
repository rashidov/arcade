import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'
import user from '../../assets/icons/user.svg'
import './style.scss'

export const TopBar: FC = () => {
  return (
    <div className="top_bar">
      <Link to="/" className="top_bar-logo">
        <img src={logo} />
        <span>ARCADE</span>
      </Link>
      <div className="top_bar-menu">
        <div className="top_bar-menu-navigation">
          <Link to="categories">Categories</Link>
          <Link to="on_sale">On Sale</Link>
          <span>Contact us</span>
        </div>
        <div className="top_bar-menu-bar">
          <TopBarUserLogin />
          <TopBarCart />
        </div>
      </div>
    </div>
  )
}

const TopBarUserLogin = () => {
  return (
    <div className="top_bar-menu-bar-user_login">
      <img src={user} />
      <span>Log In</span>
    </div>
  )
}

const TopBarCart = () => {
  return (
    <div className="top_bar-menu-bar-cart">
      <img src={cart} />
    </div>
  )
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

const Footer = () => {
     return (
          <footer className='footer'>
               <div className="container">
                    <div className="main">
                         <div className="footer-wrapper">
                              <div className="footer-menu">
                                   <div className="footer-menu-item">
                                        <img src="/assets/icons/logo.svg" className='logo' alt="" />
                                        <p className="item-text">Til o‘rganish uchun sifatli Online ta‘lim platformasi</p>
                                   </div>
                                   <div className="footer-menu-item">
                                        <h5 className="item-title">Platforma</h5>
                                        <Link to={'/about-us'} className="item-link">Biz haqimizda</Link>
                                        <Link to={'/tariffs'} className="item-link">Ta’riflar</Link>
                                        <Link to={'/blogs'} className="item-link">Blog</Link>
                                   </div>
                                   <div className="footer-menu-item">
                                        <h5 className="item-title">Ma‘lumotlar</h5>
                                        <Link to={'/join-us'} className="item-link">Birzoomda ta‘lim berish</Link>
                                        <Link to={'/partnership'} className="item-link">Korporativ hamkorlik</Link>
                                        <Link to={'/'} className="item-link">Litsensiya</Link>
                                   </div>
                                   <div className="footer-menu-item">
                                        <h5 className="item-title">Aloqa</h5>
                                        <div className="item-link-wrapper">
                                             <Icon className="icon" icon="location" />
                                             <a href='https://www.google.com/maps/place/Andijan,+Uzbekistan/@40.7804222,72.2887868,12.2z/data=!4m5!3m4!1s0x38bc901d6b13d4ef:0xfc45bcaa7973dfac!8m2!3d40.8153561!4d72.28375' className="item-link">Andijon viloyati, Andijon shahri G‘ayrat ko‘chasi, 4-uy</a>
                                        </div>
                                        <div className="item-link-wrapper">
                                             <Icon className="icon" icon="phone" />
                                             <a href='tel:+998931177222' className="item-link">+998 93 117 72 22</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="footer-links">
                                   <div className="footer-links-left">
                                        <a href="https://telegram.org/"><Icon className="icon" icon="telegram" /></a>
                                        <a href="https://www.instagram.com/"><Icon className="icon" icon="instagram" /></a>
                                        <a href="https://www.facebook.com/"><Icon className="icon" icon="facebook" /></a>
                                        <a href="https://www.tiktok.com/"><Icon className="icon" icon="tiktok" /></a>
                                        <a href="https://www.youtube.com/"><Icon className="icon" icon="youtube" /></a>
                                   </div>
                                   <div className="footer-links-right">
                                        <a href="https://www.apple.com/uz/app-store/"> <img src="/assets/icons/ios-footer.svg" alt="" /></a>
                                        <a href="https://play.google.com/store"><img src="/assets/icons/android-footer.svg" alt="" /></a>
                                   </div>
                              </div>
                         </div>
                         <p className="footer-bottom">© 2021 "Homework" MChJ</p>
                    </div>
               </div>
          </footer>
     )
}

export default Footer

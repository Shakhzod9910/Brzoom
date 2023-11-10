import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from '../Icon'

const Navbar = () => {


     const [prevScrollPos, setPrevScrollPos] = useState(0);
     const [visible, setVisible] = useState(true);
     const [fixed, setFixed] = useState(false)
     const [height, setHeght] = useState('large')

     useEffect(() => {
          window.addEventListener('scroll', scrollFunc)
          return () => {
               window.removeEventListener('scroll', scrollFunc)
          }
     }, [prevScrollPos])

     const scrollFunc = () => {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > 0) {
               if (currentScrollPos > 100) {
                    setHeght('small')
                    if (currentScrollPos > prevScrollPos) {
                         setVisible(false)
                    } else {
                         setVisible(true)
                         setFixed(true)
                    }

               }
          } else {
               setVisible(true)
               setFixed(false)
               setHeght('large')
          }
          setPrevScrollPos(currentScrollPos);
     };


     return (
          <nav className={`${visible ? 'show' : 'hide'} ${fixed ? 'fix' : ''} ${height} navbar`}>
               <div className="container">
                    <div className="main">
                         <div className="logo">
                              <Link to={'/'}><img src="/assets/icons/logo.svg" alt="" /></Link>
                         </div>
                         <div className="links">
                              <NavLink activeClassName='active' to={'/about-us'}>Biz haqimizda</NavLink>
                              <NavLink activeClassName='active' to={'/blogs'}>Bloglar</NavLink>
                              <NavLink activeClassName='active' to={'/tariffs'}>Ta‘riflar</NavLink>
                         </div>
                         <div className="buttons">
                              <button className='btn btn-gray'>O‘z <Icon className="icon" icon="arrow-down" /></button>
                              <a href='https://birzoom-app.netlify.app/sign-in' className='btn btn-primary-light'>Kirish</a>
                         </div>
                    </div>
               </div>
          </nav >
     )
}

export default Navbar

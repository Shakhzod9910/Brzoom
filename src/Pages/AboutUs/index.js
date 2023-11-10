import React, { useState, useEffect } from 'react'
import Header from './Header'
import Liders from './Liders'
import History from './History'
import MainLoader from '../../Components/Loaders/MainLoader'

const AboutUs = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className='about-us'>
               <MainLoader loading={loading} />
               <Header />
               <Liders />
               <History />
          </div>
     )
}

export default AboutUs

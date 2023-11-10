import React, { useState, useEffect } from 'react'
import Features from './Features'
import Header from './Header'
import TabSection from './TabSection'
import Opinions from './Opinions'
import Invite from './Invite'
import MainLoader from '../../Components/Loaders/MainLoader'

const HomePage = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 500)
     }, [])

     return (
          <div className='home'>
               <MainLoader loading={loading} />
               <Header />
               <Features />
               <TabSection />
               <Opinions />
               <Invite />
          </div>
     )
}

export default HomePage

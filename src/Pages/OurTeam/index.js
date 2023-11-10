import React, { useEffect, useState } from 'react'
import Comforts from './Comforts'
import Form from './Form'
import Results from './Results'
import Header from './Header'
import MainLoader from '../../Components/Loaders/MainLoader'

const OurTeam = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className=''>
               <MainLoader loading={loading} />
               <Header />
               <Results />
               <Comforts />
               <Form />
          </div>
     )
}

export default OurTeam

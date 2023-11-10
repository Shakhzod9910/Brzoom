import React, { useEffect, useState } from 'react'
import Header from './Header'
import Offers from './Offers'
import Form from './Form'
import MainLoader from '../../Components/Loaders/MainLoader'

const Partnership = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className='partnership'>
               <MainLoader loading={loading} />
               <Header />
               <Offers />
               <Form />
          </div>
     )
}

export default Partnership

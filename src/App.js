import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Pages from './Pages'

const App = () => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize()
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  const updateSize = () => {
    if (window.innerWidth < 768) {
      window.location.replace("https://m.birzoom.uz");
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    open ? <div className='app'>
      <Navbar />
      <Pages />
      <Footer />
    </div> : null
  )
}

export default App

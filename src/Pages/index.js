import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Blogs from './Blogs'
import OurTeam from './OurTeam'
import Tariffs from './Tariffs/index.js'
import Partnership from './Partnership'

const Pages = () => {

     const history = useHistory()

     history.listen(() => {
          window.scrollTo(0, 0)
     })

     return (
          <div className='pages'>
               <Switch>
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/tariffs/:lang/:status" component={Tariffs} />
                    <Route path="/tariffs" component={Tariffs} />
                    <Route path="/join-us" component={OurTeam} />
                    <Route path="/partnership" component={Partnership} />
                    <Route path="/" component={Home} exact />
               </Switch>
          </div>
     )
}

export default Pages

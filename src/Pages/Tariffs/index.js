import React, { useState, useEffect } from 'react'
import Icon from '../../Components/Icon'
import { useParams } from 'react-router-dom'

const Tariffs = () => {

     const { lang, status } = useParams()
     console.log(lang)
     const [active, setActive] = useState('left')

     useEffect(() => {
          if (status === 'individual') {
               setActive('right')
          }
     }, [])

     return (
          <div className='tariffs'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Ta’riflar<span className='text-primary'>.</span></h1>
                         <p className="title-desc">O‘zingiz uchun qulay bo‘lgan o‘rgatish uslubini tanlang. Kursni sotib oling va o‘rganishni boshlang.</p>
                         <div className={`tab ${active}`}>
                              <div className={`tab-item ${active === "left" ? 'active' : ''}`} onClick={() => setActive('left')}>Guruh</div>
                              <div className={`tab-item ${active === "right" ? 'active' : ''}`} onClick={() => setActive('right')}>Yakka</div>
                         </div>
                         <div className="tab-body">
                              <div className={`tab-card-1 ${active === "left" ? 'active' : ''}`}>
                                   <div className="card famous">
                                        <p className="card-title">Individual tarif</p>
                                        <p className="card-price">299 000 / oy</p>
                                        <p className="card-desc">Bir martalik to‘lov qilib butun umrlik ko‘rish imkoniga ega bo‘lasiz</p>
                                        <ul className="card-menu">
                                             <li><Icon className="icon" icon="checked" />Upper darajasigacha</li>
                                             <li><Icon className="icon" icon="checked" />Oyiga 12 ta dars</li>
                                             <li><Icon className="icon" icon="checked" />9 oylik kurs</li>
                                             <li><Icon className="icon" icon="checked" />Umumiy 52 ta dars</li>
                                        </ul>
                                        <button className="btn btn-primary">Kursni sotib olish</button>
                                        <span className='top-span'>MASHXUR</span>
                                   </div>
                                   <div className="card">
                                        <p className="card-title">Native o‘qituvchi</p>
                                        <p className="card-price">499 000 / oy</p>
                                        <p className="card-desc">Bir martalik to‘lov qilib butun umrlik ko‘rish imkoniga ega bo‘lasiz</p>
                                        <ul className="card-menu">
                                             <li><Icon className="icon" icon="checked" />Upper darajasigacha</li>
                                             <li><Icon className="icon" icon="checked" />Oyiga 12 ta dars</li>
                                             <li><Icon className="icon" icon="checked" />9 oylik kurs</li>
                                             <li><Icon className="icon" icon="checked" />Umumiy 52 ta dars</li>
                                        </ul>
                                        <button className="btn btn-primary-light">Kursni sotib olish</button>
                                   </div>
                              </div>
                              <div className={`tab-card-2 ${active === "right" ? 'active' : ''}`}>
                                   <div className="card">
                                        <p className="card-title">Individual tarif</p>
                                        <p className="card-price">299 000 / oy</p>
                                        <p className="card-desc">Bir martalik to‘lov qilib butun umrlik ko‘rish imkoniga ega bo‘lasiz</p>
                                        <ul className="card-menu">
                                             <li><Icon className="icon" icon="checked" />Upper darajasigacha</li>
                                             <li><Icon className="icon" icon="checked" />Oyiga 12 ta dars</li>
                                             <li><Icon className="icon" icon="checked" />9 oylik kurs</li>
                                             <li><Icon className="icon" icon="checked" />Umumiy 52 ta dars</li>
                                        </ul>
                                        <button className="btn btn-primary-light">Kursni sotib olish</button>

                                   </div>
                                   <div className="card famous">
                                        <p className="card-title">Yakkalik o‘qituvchi</p>
                                        <p className="card-price">499 000 / oy</p>
                                        <p className="card-desc">Bir martalik to‘lov qilib butun umrlik ko‘rish imkoniga ega bo‘lasiz</p>
                                        <ul className="card-menu">
                                             <li><Icon className="icon" icon="checked" />Upper darajasigacha</li>
                                             <li><Icon className="icon" icon="checked" />Oyiga 12 ta dars</li>
                                             <li><Icon className="icon" icon="checked" />9 oylik kurs</li>
                                             <li><Icon className="icon" icon="checked" />Umumiy 52 ta dars</li>
                                        </ul>
                                        <button className="btn btn-primary">Kursni sotib olish</button>

                                        <span className='top-span'>MASHXUR</span>
                                   </div>
                                   <div className="card">
                                        <p className="card-title">Yakkalik native</p>
                                        <p className="card-price">699 000 / oy</p>
                                        <p className="card-desc">Bir martalik to‘lov qilib butun umrlik ko‘rish imkoniga ega bo‘lasiz</p>
                                        <ul className="card-menu">
                                             <li><Icon className="icon" icon="checked" />Upper darajasigacha</li>
                                             <li><Icon className="icon" icon="checked" />Oyiga 12 ta dars</li>
                                             <li><Icon className="icon" icon="checked" />9 oylik kurs</li>
                                             <li><Icon className="icon" icon="checked" />Umumiy 52 ta dars</li>
                                        </ul>
                                        <button className="btn btn-primary-light">Kursni sotib olish</button>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Tariffs

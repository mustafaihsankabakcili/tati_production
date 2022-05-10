import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Kurumsal from '../pages/Kurumsal';
import Hizmetler from '../pages/Hizmetler';
import Projeler from '../pages/Projeler';
import Referanslar from '../pages/Referanslar';
import Videolar from '../pages/Videolar';
import TanitimFilmiFiyatlari from '../pages/TanitimFilmiFiyatlari';
import Iletisim from '../pages/Iletisim';




const AppRouter = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/kurumsal' element={<Kurumsal/>}/>
            <Route path='/hizmetler' element={<Hizmetler/>}/>
            <Route path='/projeler' element={<Projeler/>}/>
            <Route path='/referanslar' element={<Referanslar/>}/>
            <Route path='/videolar' element={<Videolar/>}/>
            <Route path='/tanitim-filmi-fiyatlari' element={<TanitimFilmiFiyatlari/>}/>
            <Route path='/iletisim' element={<Iletisim/>}/>
        </Routes>
  )
}

export default AppRouter
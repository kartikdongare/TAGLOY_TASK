import React from 'react'
import './App.css'
import Images from './Component/Images'
import VerticalTabs from './Component/VerticalTabs'
import CheckBox from './Component/CheckBox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2 p-0 m-0'>
              <VerticalTabs />
            </div>
            <div className='col mt-4'>
              <Routes>
                <Route path='/fread' element={<Images />} />
                <Route path='/checkbox' element={<CheckBox />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
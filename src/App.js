import React from 'react'
import './App.css'
import Images from './Component/Images'
import VerticalTabs from './Component/VerticalTabs'
import CheckBoxComponent from './Component/CheckBox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2 bg-dark p-0 m-0'>
              <VerticalTabs />
            </div>
            <div className='col mt-4'>
              <Routes>
                <Route path='/fread' element={<Images />} />
                <Route path='/checkbox' element={<CheckBoxComponent />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App;
import React from 'react'
import CheckBox from './CheckBox'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'

const VerticalTabs = () => {
  return (
    <div className='container-fluid'>
      <div className='row position-absolute'>
        <div className='col-auto min-vh-100 bg-dark text-light '>
          <ul>
            <il>
              <Link to='/fread' className='nav-link px-2 p-4'>
                <i className='bi-speedometer ' /><span className='ms-1 d-none d-sm-inline ms-4'>Images</span>
              </Link>
            </il>
            <il>
              <Link to='/checkbox' className='nav-link px-2'>
                <i className='bi-speedometer ' /><span className='ms-1 d-none d-sm-inline ms-4'>CheckBox</span>
              </Link>
            </il>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VerticalTabs
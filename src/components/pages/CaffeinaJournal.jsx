import React from 'react'
import Navigation from '../Navigation'
import Heading from '../Heading'
import Contents from '../Contents'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const CaffeinaJournal = () => {
  return (
    <div className='bg-[#0F0F0F] min-h-screen '>
        <Navigation/>
        <Heading/>
        <Contents/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default CaffeinaJournal
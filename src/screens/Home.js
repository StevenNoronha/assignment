import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Contents from '../components/Contents'
import Footer from '../components/Footer'
import Subsection from '../components/Subsection'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='container main'>
        <Header/>
        <Contents/>
        <Subsection/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home
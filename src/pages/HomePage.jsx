import React from 'react'
import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import Specialization from '../components/Specialization'
import Specialist from '../components/Specialist'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SearchSection/>
        <Offer/>
        <Specialization/>
        <Specialist/>
    </div>
  )
}

export default HomePage
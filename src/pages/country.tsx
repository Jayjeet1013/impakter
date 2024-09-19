import Blog from '@/components/countryPage/Blog'
import Book from '@/components/countryPage/Book'
import Faqs from '@/components/countryPage/Faqs'
import FreeEsg from '@/components/countryPage/FreeEsg'
import Hero from '@/components/countryPage/Hero'
import ListofCountry from '@/components/countryPage/ListofCountry'
import React from 'react'

const country = () => {
  return (
    <div>
        <Hero/>
        <ListofCountry/>
        <FreeEsg/>
        <Blog/>
        <Faqs/>
        <Book/>
    </div>
  )
}

export default country
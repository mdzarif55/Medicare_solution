import React from 'react'
import MainBanner from '../components/MainBanner'
import Catagories from '../components/Catagories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import FeatureHub from './FeatureHub'

const Home = () => {
  return (
    <div className=' mt-10'>
        <MainBanner/>
        <Catagories/>
        <FeatureHub/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
        
    </div>
  )
}


export default Home

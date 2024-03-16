import React from 'react'
import Topbar from './common/Topbar'
import Navbar from './common/Navbar'
import SiteHeader from './common/SiteHeader'
import HeroBanner from './home/HeroBanner'
import Features from './home/Features'
import FeaturedProducts from './home/FeaturedProducts'
import AdBanners from './home/AdBanners'
import Deals from './home/Deals'
import NewArrivals from './home/NewArrivals'
import Testimonials from './home/Testimonials'
import NewsPromo from './home/NewsPromo'
import Newsletter from './home/Newsletter'
import Footer from './common/Footer'

export default function Home() {
  return (
    <>
        <Topbar />
        <SiteHeader />
        <Navbar />
        <HeroBanner />
        <Features />
        <NewArrivals />
        <AdBanners />
        <Deals />
        <FeaturedProducts />
        <Testimonials />
        <NewsPromo />
        <Newsletter />
        <Footer />
    </>
  )
}

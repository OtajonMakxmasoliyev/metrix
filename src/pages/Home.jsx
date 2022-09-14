import React from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Navigation name="Dashboard" />
        </div>
    )
}

export default Home
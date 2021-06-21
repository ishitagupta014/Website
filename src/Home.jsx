import React from 'react'
import { NavLink } from 'react-router-dom'
import web from  "../src/download.jpg"
import Common from "./Common"
const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgsrc={web}
            visit="/service" btnName="Get Started"/>
        </>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <p>Home</p>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Home
export { Home }
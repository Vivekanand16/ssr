import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div>
            <p>About</p>
            <Link to='/home'>Home</Link>
        </div>
    )
}

export default About
export { About }
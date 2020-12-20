import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'
import { Routes } from './AppRoutes'

const App = (props) => {
    return (
        <Router location={props.location}>
            <Routes {...props}/>
        </Router>
    )
}

export default App
export { App }
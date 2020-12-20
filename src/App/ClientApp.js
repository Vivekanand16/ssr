import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import { Routes } from './AppRoutes'

const App = (props) => {
    return (
        <Router>
            <Routes {...props}/>
        </Router>
    )
}

loadableReady(() => {
    ReactDOM.hydrate(<App />, document.getElementById("app-root"))
})

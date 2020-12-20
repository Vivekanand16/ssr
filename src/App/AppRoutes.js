import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: 'Home'
    },
    {
        path: '/home',
        exact: true,
        component: 'Home'
    },
    {
        path: '/about',
        exact: true,
        component: 'About'
    },
]

// To split components into chunks
const LoadableComponent = loadable(props => import(`src/Components/${props.componentName}`))

const Routes = props => {
    return (
        <Switch>
            {
                ROUTES.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        render={routeProps => 
                            <LoadableComponent {...props} {...routeProps} componentName={route.component}/>
                        } 
                    />    
                )
            }
        </Switch>
    )

}

export default Routes
export { Routes }
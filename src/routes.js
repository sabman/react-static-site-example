import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App'
import Home from './pages/Home/Home'
import Tech from './pages/Tech/Tech'
import Contact from './pages/Contact/Contact'
import RequestDemo from './pages/RequestDemo/RequestDemo';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/tech' component={Tech}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/request-demo' component={RequestDemo}/>
  </Route>
)

import React from 'react';
import { Route } from 'react-router-dom';
import Show from './components/Show'
import Adding from './components/Adding'

export default [
    <Route  path='/show' component={Show} />,
    <Route path='/adder' component={Adding} />
]
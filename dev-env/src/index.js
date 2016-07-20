import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';

import Main from './components/Main'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Courses}></IndexRoute>
      <Route path="/view/:courseId" component={ShowCourse}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));

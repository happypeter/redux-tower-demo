import React from 'react';
import Radium from 'radium';

import courses from '../data/courses';
import Course from './Course';

const Courses = React.createClass({
  render() {
    let styles = {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
    return (
      <div style={styles.root}>
        { courses.map((course, i) => <Course key={i} course={course} />)}
      </div>
    )
  }
});

export default Radium(Courses);

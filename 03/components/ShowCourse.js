import React, { Component } from 'react';

import courses from '../data/courses';
import Course from './Course';

class ShowCourse extends Component {
  getStyles() {
    return {
      top: {
        backgroundColor: '#00bcd4',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      },
      container: {
        maxWidth: '900px',
        margin: '0 auto',
      }
    };
  }

  render() {
    const { courseId } = this.props.params;

    const index = courses.findIndex((c) => c.id === courseId);
    const selectedCourse = courses[index];

    let styles = this.getStyles();
    return (
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCourse;


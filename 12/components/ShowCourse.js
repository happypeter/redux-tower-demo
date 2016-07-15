import React, { Component } from 'react';

// import courses from '../data/courses';
import Course from './Course';
import CommentBox from './CommentBox';

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

    const index = this.props.courses.findIndex((c) => c.id === courseId);
    const selectedCourse = this.props.courses[index];
    const comments = this.props.comments[courseId];
    let styles = this.getStyles();
    return (
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} increment={this.props.increment} comments={comments} />
          </div>
        </div>
        <CommentBox comments={comments} />
      </div>
    );
  }
}

export default ShowCourse;

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card } from 'material-ui/Card';
import Radium from 'radium';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import CourseActions from './CourseActions';

class Course extends Component {

  getStyles() {
    return {
      root: {
        margin: '0 2rem 4rem',
        flexBasis: '100%',
        '@media (min-width: 600px)': {
          flexBasis: 'calc(50% - 4rem)'
        }
      },
      imgWrap: {
        position: 'relative'
      },
      img: {
        width: '100%',
        display: 'block'
      }
    };
  }

  render() {
    const { course } = this.props;
    let styles = this.getStyles();

    return (
      <div style={styles.root}>
        <Card>
          <div style={styles.imgWrap}>
            <Link to={`/view/${course.id}`}>
              <img src={course.image} alt={course.name} style={styles.img} />
            </Link>

            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              <span key={course.likes} className="likes-heart">{course.likes}</span>
            </CSSTransitionGroup>
          </div>
          <CourseActions course={course} increment={this.props.increment} comments={this.props.comments} />
        </Card>
      </div>
    );
  }
}

export default Radium(Course);

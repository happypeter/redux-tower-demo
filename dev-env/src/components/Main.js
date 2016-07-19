import React, { Component } from 'react';
import Courses from './Courses';

class Main extends Component {
  render() {
    let styles = {
      root: {
        fontFamily: 'sans-serif'
      },
      header: {
        backgroundColor: '#00bcd4',
        height: '8.4rem',
        width: '100%',
        textAlign: 'center'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      }
    };
    return (
      <div style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>Haoqicat</div>
        </header>
        <Courses />
      </div>
    );
  }
}

export default Main;

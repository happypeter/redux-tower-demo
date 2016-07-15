import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium';

import Courses from './Courses';

class Main extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

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
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>Haoqicat</div>
        </header>
        <Courses />
      </StyleRoot>
    );
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(Main);


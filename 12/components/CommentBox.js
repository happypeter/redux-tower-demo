import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';
import { Card } from 'material-ui/Card';
import Radium from 'radium';

class CommentBox extends Component {
  getStyles() {
    return {
      root: {
        maxWidth: '900px',
        margin: '0 auto 30px',
      },
      container: {
        margin: '3rem 2rem',
        padding: '1rem 2rem 2rem'
      },
      textField: {
        display: 'block',
        width: '80%',
        minWidth: '256px'
      },
      comment: {
        display: 'flex',
        paddingTop: '16px',
        paddingBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ddd'
      },
      user: {
        fontSize: '1.7rem',
        paddingRight: '2rem',
        display: 'block',
        color: '#555',
        fontWeight: '600'
      },
      icon: {
        cursor: 'pointer',
        marginLeft: '1rem',
        width: '18px',
        height: '18px',
        flexShrink: '0'
      },
      content: {
        fontSize: '1.6rem',
        color: '#777',
        flexGrow: '1',
        fontWeight: 'normal'
      },
      form: {
        marginTop: '30px'
      }
    }
  }

  render() {
    let styles = this.getStyles();
    let commentList;
    if(this.props.comments !== undefined) {
      commentList = this.props.comments.map((comment, i) => {
        return (
          <div key={i} style={styles.comment}>
            <div style={styles.user}>{comment.user}: </div>
            <div style={styles.content}>{comment.text}</div>
            <ActionHighlightOff color='red' style={styles.icon} />
          </div>
        )
      });
    }
    return (
      <div style={styles.root}>
        <Card style={styles.container}>
          { commentList }
          <form ref="commentForm" style={styles.form}>
            <TextField
              ref='author'
              style={styles.textField}
              hintText="名字" />
            <TextField
              ref='comment'
              style={styles.textField}
              hintText="评论" />
            <RaisedButton
              style={{marginTop: '10px'}}
              labelStyle={styles.label}
              type="submit"
              label="评论"
              secondary={true} />
          </form>
        </Card>
      </div>
    )
  }
}

export default Radium(CommentBox);

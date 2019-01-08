import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@material-ui/core/colors/';
import classnames from 'classnames';
import propTypes from 'prop-types';

const styles = {
  avatar: {
    fontSize: '24px',
    height: '48px',
    width: '48px',
  },
  smallAvatar: {
    fontSize: '18px',
    height: '36px',
    width: '36px',
  },
  wrapper: {
    padding: 0,
  },
  red: {
    backgroundColor: red[500],
  },
  pink: {
    backgroundColor: pink[500],
  },
  purple: {
    backgroundColor: purple[500],
  },
  deepPurple: {
    backgroundColor: deepPurple[500],
  },
  indigo: {
    backgroundColor: indigo[500],
  },
  blue: {
    backgroundColor: blue[500],
  },
  lightBlue: {
    backgroundColor: lightBlue[500],
  },
  cyan: {
    backgroundColor: cyan[500],
  },
  teal: {
    backgroundColor: teal[500],
  },
  green: {
    backgroundColor: green[500],
  },
  lightGreen: {
    backgroundColor: lightGreen[500],
  },
  lime: {
    backgroundColor: lime[500],
  },
  yellow: {
    // 明るすぎて字が見えないからyellowだけ600
    backgroundColor: yellow[600],
  },
  amber: {
    backgroundColor: amber[500],
  },
  orange: {
    backgroundColor: orange[500],
  },
  deepOrange: {
    backgroundColor: deepOrange[500],
  },
  brown: {
    backgroundColor: brown[500],
  },
  grey: {
    backgroundColor: grey[500],
  },
  blueGrey: {
    backgroundColor: blueGrey[500],
  },
};

const colorMap = {
  0: 'red',
  1: 'pink',
  2: 'purple',
  3: 'deepPurple',
  4: 'indigo',
  5: 'blue',
  6: 'lightBlue',
  7: 'cyan',
  8: 'teal',
  9: 'green',
  10: 'lightGreen',
  11: 'lime',
  12: 'yellow',
  13: 'amber',
  14: 'orange',
  15: 'deepOrange',
  16: 'brown',
  17: 'grey',
  18: 'blueGrey',
};

const CharIcon = ({ name, small, onClick, classes }) => {
  const size = Object.keys(colorMap).length;
  const code = name.charCodeAt();
  const color = colorMap[code % size];
  return (
    <IconButton onClick={onClick} className={classes.wrapper} disableRipple>
      <Avatar className={classnames(classes.avatar, small && classes.smallAvatar, classes[color])}>
        {name.charAt(0)}
      </Avatar>
    </IconButton>
  );
};

CharIcon.displayName = 'CharIcon';

CharIcon.propTypes = {
  name: propTypes.string.isRequired,
  small: propTypes.bool,
  onClick: propTypes.func,
};

CharIcon.defaultProps = {
  small: false,
  onClick: null,
};

export default withStyles(styles)(CharIcon);

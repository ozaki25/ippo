import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.primary[50],
  },
});

const onClick = (url, history) => (history ? history.push(url) : window.open(url, '_blank'));

const StyledCard = styled(Card)`
  min-height: ${({ expand }) => (expand ? '130px' : 'inherit')};
`;

const StyledCardActionArea = styled(CardActionArea)`
  min-height: ${({ expand }) => (expand ? '130px' : 'inherit')};
`;

const CustomCard = ({ classes, interactive, expand, url, history, children }) => (
  <StyledCard
    expand={expand ? 1 : 0}
    onClick={() => onClick(url, history)}
    className={classes.card}
  >
    <StyledCardActionArea expand={expand ? 1 : 0}>
      <CardContent>{children}</CardContent>
    </StyledCardActionArea>
  </StyledCard>
);

CustomCard.displayName = 'CustomCard';

CustomCard.propTypes = {
  expand: propTypes.bool,
  url: propTypes.string.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }),
  children: propTypes.node.isRequired,
};

CustomCard.defaultProps = {
  expand: false,
  history: null,
};

export default withStyles(styles)(CustomCard);

import React from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IconImage from 'src/components/atoms/IconImage';
import TweetHeader from 'src/components/organisms/TweetHeader';
import TweetBody from 'src/components/organisms/TweetBody';
import TweetFooter from 'src/components/organisms/TweetFooter';

const Container = styled.div`
  padding: 9px 12px 0;
`;

const Wrapper = styled.div`
  font-size: 15px;
  margin-left: 58px;
`;

const StyledIconImage = styled(IconImage)`
  margin-left: -58px;
`;

const todo = () => console.log('TODO');

const Tweet = ({ name, text, time }) => (
  <>
    <Container>
      <Wrapper>
        <StyledIconImage src="/icon.png" />
        <TweetHeader name={name} time={time} />
        <TweetBody text={text} />
        <TweetFooter onClickReply={todo} onClickRetweet={todo} onClickLike={todo} />
      </Wrapper>
    </Container>
    <Divider light />
  </>
);

Tweet.displayName = 'Tweet';

Tweet.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};

Tweet.defaultProps = {};

export default Tweet;

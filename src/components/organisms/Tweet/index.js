import React from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import TweetFixedText from 'src/components/organisms/TweetFixedText/index';
import CharIcon from 'src/components/atoms/CharIcon';
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

const IconContainer = styled.div`
  float: left;
  margin-left: -58px;
  position: absolute;
`;

const todo = () => console.log('TODO');

const Tweet = ({ name, text, time, fixed }) => (
  <>
    <Container>
      {fixed && <TweetFixedText />}
      <Wrapper>
        <IconContainer>
          <CharIcon name={name} />
        </IconContainer>
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
  text: propTypes.node.isRequired,
  time: propTypes.string.isRequired,
  fixed: propTypes.bool,
};

Tweet.defaultProps = {
  fixed: false,
};

export default Tweet;

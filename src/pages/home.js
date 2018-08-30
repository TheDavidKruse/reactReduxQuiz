import React, { Component } from 'react';
import PostCardList from '../components/Posts/postCardList';
import { Container } from 'semantic-ui-react';


class Home extends Component {
  let 
  render () {
    return (
      <Container>
        <PostCardList/>
      </Container>
    )
  }
}

export default Home
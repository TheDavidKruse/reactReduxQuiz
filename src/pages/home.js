import React, { Component } from 'react';
import PostCardList from '../components/Posts/postCardList';
import { Container, Transition, Message } from 'semantic-ui-react';


class Home extends Component {
  state={
    messageOpen:false
  }

  componentDidMount(){
    if(this.props.location.state){
      this.setState({messageOpen: true})
    }
  }

  closeMessage = () => this.setState({messageOpen: false})

  renderPostSuccess = () => {
    return (
      <Transition visible={this.state.messageOpen} animation="fade down" style={{marginTop:'5px'}}>
        <Message style={{textAlign:'center'}} positive floating onDismiss={this.closeMessage}>
          <Message.Header>Post creation successful!</Message.Header>
        </Message>
      </Transition>
    )
  }
  render () {
    return (
      <Container>
        {this.renderPostSuccess()}
        <PostCardList/>
      </Container>
    )
  }
}

export default Home
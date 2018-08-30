import React, { Component } from 'react'
import { Button, Comment, Header, Loader } from 'semantic-ui-react'


import CommentComp from './comment'
import NewComment from './newComment'


class CommentList extends Component {

  state={
    showAdd: false
  }

  renderComments(){
    return this.props.comments.map(comment => <CommentComp key={comment.id} comment={comment}/>)
  }
  render () {
    return (
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>
        {!this.state.showAdd? <Button content='Add Reply' onClick={() => this.setState({showAdd: true})} labelPosition='left' icon='edit' primary />: null}
        {this.state.showAdd? <NewComment postId={this.props.postId}/> : null}
        {this.props.comments ? this.renderComments(): <Loader/>}

      </Comment.Group>
    )
  }
}

export default CommentList
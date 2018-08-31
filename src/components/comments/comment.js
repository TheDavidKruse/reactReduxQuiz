import React from 'react'
import {Comment} from 'semantic-ui-react'

import profile from '../../img/profile.png'

const CommentComp = (props) => {

  return (
    <Comment>
    <Comment.Avatar src={profile} />
    <Comment.Content>
      <Comment.Author>{props.comment.email}</Comment.Author>
      <Comment.Text><b>{props.comment.name}</b></Comment.Text>
      <Comment.Text>{props.comment.body}</Comment.Text>
    </Comment.Content>
  </Comment>
  )
}

export default CommentComp
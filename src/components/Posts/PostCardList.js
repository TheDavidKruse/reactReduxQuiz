import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

import PostCard from './PostCard'

class PostCardList extends Component {
  constructor(){
    super()
    this.mappedPosts = this.mappedPosts.bind(this)
  }

  mappedPosts(){
    return this.props.posts.map(post => {
      const [author] = this.props.authors.filter(({id}) => id === post.userId)
      const comments = this.props.comments.filter(({postId}) => postId === post.id)

      return (
        <PostCard key={post.id} author={author} comments={comments} post={post}/>
      )
    })
  }
  render () {
    return (
      <Card.Group stackable>
        {this.mappedPosts()}
      </Card.Group>
    )
  }
}

const mapStateToProps = ({posts, authors, comments}) => ({posts, authors, comments})

export default connect(mapStateToProps, null)(PostCardList)
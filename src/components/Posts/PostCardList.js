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
    let { posts, comments, authors } = this.props
    
    if(posts.length > 0 && comments && authors.length > 0){
      return this.props.posts.map(post => {
        const [author] = this.props.authors.filter(({id}) => id === post.userId)
        
        const comments = this.props.comments.filter(({postId}) => postId === post.id)
  
        return (
          <PostCard key={post.id} author={author} comments={comments} post={post}/>
        )
      })
    } else {
      return null
    }

  }

  render () {
    return (
      <Card.Group stackable itemsPerRow={3}>
        {this.mappedPosts()}
      </Card.Group>
    )
  }
}

const mapStateToProps = ({posts, authors, comments}) => ({posts, authors, comments})

export default connect(mapStateToProps, null)(PostCardList)
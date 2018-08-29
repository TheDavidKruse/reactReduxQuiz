import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const PostCards = (props) => {
  const {post, comments, author } = props

  const title = post.title.length > 15? post.title.slice(0,12) + "...": post.title;
  
  const description = post.body.length > 30? post.title.slice(0, 27) + "..." : post.body;

  const authorName = author && author.name? author.name : "Anonymous"

  const commentLength = comments.length;

  return (
    <Card>
      <Image src={"https://via.placeholder.com/250x250"}/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        Posted by: <a>{authorName}</a>
        {commentLength} comments
      </Card.Content>
    </Card>
  )

}

export default PostCards


import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


const PostCards = (props) => {
  let {post, comments, author } = props

  if(!author) {
    author = {name:'Anonymous'}
  }

  const title = post.title.length > 15? post.title.slice(0,12) + "...": post.title;
  
  const description = post.body.length > 30? post.body.slice(0, 27) + "..." : post.body;

  const authorName = author && author.name? author.name : "Anonymous" || "Anonymous"

  const commentLength = comments.length;

  return (
    <Card>
      <Image src={"https://via.placeholder.com/250x250"}/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Posted by: <Link to={"/author/"+author.id}>{authorName}</Link></p>
        <p>{commentLength} comments</p>
      </Card.Content>
    </Card>
  )

}

export default PostCards


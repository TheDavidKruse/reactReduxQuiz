import React from 'react'
import { Grid, Loader, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const PostContent = (props) => {
  const { post, author } = props


  let link;

  if( author && author.name !== "Anonymous"){
    link = (
      <Link to={{
        pathname:`/author/${author.name.toLowerCase().replace(/\s/ig, "")}`,
        state:{author}
        }}>{author ? author.name : "Loading..."}</Link>
    )
  } else if (author) {
    link = author.name 
  } else {
    link = "Loading..."
  }

  if(post && author){
    return (
      <Grid>
      <Segment>
        <Grid.Row>
          <h2 style={{width:'100%', marginBottom:'0'}}>{post && post.title? post.title : "Loading..."}</h2>
          <h4 style={{width:'100%', marginTop:'5px'}}>By: {link} </h4>
        </Grid.Row>
        <br/>
        <Grid.Row>
          {post && post.body? post.body : "Loading..."}
        </Grid.Row>
      </Segment>
      </Grid>
    )
  } else {
    return <Loader/>
  }

}

export default PostContent
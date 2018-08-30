import React from 'react'
import { Grid, Loader, Segment } from 'semantic-ui-react';

const PostContent = (props) => {
  console.log(props)
  const { post, author } = props
  if(post && author){
    return (
      <Grid>
      <Segment>

        <Grid.Row>
          <h2 style={{width:'100%', marginBottom:'0'}}>{post && post.title? post.title : "Loading..."}</h2>
          <h4 style={{width:'100%', marginTop:'5px'}}>By: {author ? author.name : "Loading..."}</h4>
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
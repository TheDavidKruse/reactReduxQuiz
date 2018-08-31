import React from 'react'
import { Grid } from 'semantic-ui-react';

const fourOhfour = (props) => {
  return (
    <Grid centered style={{margin: '20vh auto', width:'20%', minWidth:'400px'}}>
      <Grid.Column>
        Looks like we couldn't find a route for that, try clicking something in that nav bar!
      </Grid.Column>
    </Grid>
  )
}

export default fourOhfour
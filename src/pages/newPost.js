import React, { Component } from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import {addPost} from '../redux/actions/postAction';


class NewPost extends Component {
  state={
    title:'',
    body:''
  }


  submitPost = () => {
    console.log("click")
    this.props.addPost(this.state)
  }

  render () {
    return (
      <Container style={{paddingTop:'20px'}}>
      <h3 style={{textAlign:'center'}}>Add a new post!</h3>
      <br/>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input name="title" placeholder='Title' onChange={ (e) => this.setState({title:e.target.value})} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name="body" onChange={(e) => this.setState({body:e.target.value})} type="textarea"/>
          </Form.Field>
          <Link className="button ui" to="/" onClick={ this.submitPost}>Submit</Link><Link to="/" className="button ui">Cancel</Link>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPost: bindActionCreators(addPost, dispatch),
})

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
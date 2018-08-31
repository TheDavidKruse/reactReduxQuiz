import React, { Component } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {addPost} from '../redux/actions/postAction';


class NewPost extends Component {
  state={
    title:'',
    body:''
  }


  submitPost = () => {
    const {addPost} = this.props
    addPost(this.state)
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({[name]: value})
  }

  render () {
    const {title, body} = this.state
    return (
      <Container style={{paddingTop:'20px'}}>

      <h3 style={{textAlign:'center'}}>Add a new post!</h3>
      <br/>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input name="title" placeholder='Title' onChange={ this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea name="body" onChange={this.handleChange}/>
          </Form.Field>
          {title && body && title.length > 0 && body.length > 0? <Link className={"button ui blue"} to={{pathname:"/", state:this.state}} onClick={this.submitPost}>Submit</Link> : <Button color="blue" disabled>Please fill out form</Button>}
          <Link to="/" className="button ui">Cancel</Link>
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
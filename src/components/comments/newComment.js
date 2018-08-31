import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import { addComment } from '../../redux/actions/commentAction'

class NewComment extends Component {

  state={
    name:'',
    body:''
  }

  componentDidMount(){
    this.setState({
      postId:this.props.postId,
      name:'',
      body:'',
      email: 'Anonymous'
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state)
    this.setState({
      name:'',
      body:''
    })
    this.props.hideNew()
  }

  handleCancel = () => {
    this.setState({
      name:'',
      body:''
    })
    this.props.hideNew()
  }

  render () {
    return (
      <Segment>
        <Form>
          <Form.Field>
          <label>Title</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          </Form.Field>
          <Form.Field>
          <label>Body</label>
            <textarea name="body" onChange={this.handleChange} value={this.state.body}></textarea>
          </Form.Field>
          <Button disabled={this.state.name.length > 0 && this.state.body.length > 0?false : true} onClick={this.state.name.length > 0 && this.state.body.length > 0? this.handleSubmit  : null}>Submit</Button> <Button onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: bindActionCreators(addComment, dispatch),
})

export default connect(() => ({}), mapDispatchToProps)(NewComment)
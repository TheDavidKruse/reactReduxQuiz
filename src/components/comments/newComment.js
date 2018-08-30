import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import { addComment } from '../../redux/actions/commentAction'

class NewComment extends Component {
  state={
    title:'',
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
  render () {
    console.log("NEWCOMMENT",this.state, this.props)
    return (
      <Segment>
        <Form>
          <Form.Field>
          <label>Title</label>
            <input type="text" onChange={(e) => this.setState({title:e.target.value})} value={this.state.title}/>
          </Form.Field>
          <Form.Field>
          <label>Body</label>
            <textarea onChange={(e) => this.setState({body:e.target.value})} value={this.state.body}></textarea>
          </Form.Field>
          <Button disabled={this.state.title.length > 0 && this.state.body.length > 0?false : true} onClick={this.state.title.length > 0 && this.state.body.length > 0? () => this.props.addComment(this.state) : null}>Submit</Button> <Button onClick={() => this.setState({title:'', body:''})}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: bindActionCreators(addComment, dispatch),
})

export default connect(() => ({}), mapDispatchToProps)(NewComment)
import React, {Component} from 'react';
import { Card, Image, Dimmer } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


export default class PostCards extends Component {
  state={
    active: false
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render () {
    const { active } = this.state
    let {post, comments, author } = this.props

    if(!author) {
      author = {name:'Anonymous'}
    }

    const content = <Link to={{pathname:`/post/${post.id}`, state:{post, comments, author} }} className="ui button inverted">Show Details</Link>
  
    const title = post.title.length > 15? post.title.slice(0,12) + "...": post.title;
    
    const description = post.body.length > 30? post.body.slice(0, 27) + "..." : post.body;
  
    const authorName = author && author.name? author.name : "Anonymous" || "Anonymous";
  
    const commentLength = comments.length;

    return (
      <Card>
        <Dimmer.Dimmable dimmed={active} dimmer={{active, content}} as={Image} onMouseEnter={this.handleShow} onMouseLeave={this.handleHide} src={"https://via.placeholder.com/250x250"}>
        </Dimmer.Dimmable>
        <Card.Content>
          <Card.Header><Link to={{pathname:`/post/${post.id}`, state:{post, comments, author}}}>{title}</Link></Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Posted by: <Link to={{pathname:`/author/${author.name.toLowerCase().replace(/\s/ig, "")}`, state:author}}>{authorName}</Link></p>
          <p>{commentLength} comments</p>
        </Card.Content>
      </Card>
    )
  }
}


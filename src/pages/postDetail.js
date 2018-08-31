import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import banner from '../img/Parabolic.png'
import PostContent from '../components/Posts/postContent';
import CommentList from '../components/comments/commentList';

class PostDetail extends Component {

  state={foundPost:null}

  setCurrentPostDetails(incomingProps){
    const {posts, location, match} = this.props
    const { comments:incom, authors:inauth} = incomingProps

    if(this.state.author && this.state.post && this.state.comments && this.state.comments.length > 0 && this.props.comments.length === incom.length){
      return;
    }

    if(location.state){
      let {post:currentPost, comments:currentComments, author:currentAuthor} = location.state
      if(currentComments && currentComments.length < incom.length){
        currentComments = incom.filter(com =>  com.postId.toString() === match.params.id.toString())
      }
      this.setState({post:currentPost, comments:currentComments, author:currentAuthor, foundPost:true})
      return;
    } else {
      let post = posts.find(post =>  post.id.toString() === match.params.id.toString())
      if(!post){
        this.setState({foundPost: false})
        return;
      }
      let postComments =  incom.filter(com =>  com.postId.toString() === match.params.id.toString())
      let [postAuthor] = inauth.filter(author => author.id === post.userId)
      this.setState({post, comments:postComments, author:postAuthor})

    }
  }

  componentDidMount(){
    this.setCurrentPostDetails(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.setCurrentPostDetails(nextProps);
  }

  render () {
    let { post, author, comments, } = this.state
      if(Object.keys(this.state).length === 1 && this.state.foundPost === false){
        return <div>404</div>
      } else {
        return (
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Image style={{width:'100vw', marginTop:'20px'}} src={banner}/>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={10}>
                  <PostContent author={author} post={post}/>
                </Grid.Column>
                <Grid.Column width={6}>
                  <CommentList comments={comments} postId={this.props.match.params.id}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        )
      }
  }
}

const mapStateToProps = ({posts, comments, authors}) => ({posts, comments, authors})

export default connect(mapStateToProps, null)(PostDetail)
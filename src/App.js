import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './App.css';
import Home from './pages/home';
import NewPost from './pages/newPost';
import PostDetail from './pages/postDetail';
import Menu from './components/menu/menu';


import { getPosts } from './redux/actions/postAction';
import { getAuthors } from './redux/actions/authorAction';
import { getComments } from './redux/actions/commentAction';
import Author from './pages/author';
import fourOhfour from './pages/404';

class App extends Component {

  componentDidMount(){
    this.props.getPosts();
    this.props.getAuthors();
    this.props.getComments();
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/posts" render={() => <Redirect to="/home"/>}/>
          <Route exact path="/post/new" component={NewPost}/>
          <Route exact path="/post/:id" component={PostDetail}/>
          <Route exact path="/author/:name" component={Author}/>
          <Route exact path="/reactReduxQuiz" render={() => <Redirect to="/home"/>}/>
          <Route component={fourOhfour}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: bindActionCreators(getPosts, dispatch),
  getAuthors: bindActionCreators(getAuthors, dispatch),
  getComments: bindActionCreators(getComments, dispatch)
})

const mapStateToProps = (state) => ({})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

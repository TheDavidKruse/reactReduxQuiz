import React, { Component } from 'react'
import { Container, Grid, Segment, Image, Message } from 'semantic-ui-react';
import { connect } from 'react-redux'
import MyMapComponent from '../components/author/googleMap'
import NotLikeThis from '../img/theHiddenWeapon.mp4'

class Author extends Component {

  state={}

  initAuthor(authors = undefined){
    console.log("AUTHOR PROPS",authors, this.props, this.state)
    const { location, match } = this.props;
    if(!this.state.author){
      if(location.state){
        console.log("setting state from location", location.state)
        this.setState({author: location.state.author})
      } else {
        if(authors && authors.length > 0){
          console.log("inside else init author", this.props)
          let author = authors.find(a => a.name.toLowerCase().replace(/\s/ig, "") === match.params.name)
          this.setState({author})
        }
      }
    }
  }

  componentDidMount(){
    this.initAuthor()
  }

  componentWillReceiveProps(nextProps){

    console.log(nextProps.authors)
    console.log("CWRP")
    this.initAuthor(nextProps.authors)
  }

  render () {
    if(this.props.match.params.name === "anonymous"){
      return  <video src={NotLikeThis} autoPlay={true} style={{width:'100vw', height:'100vh'}}/>
    }

    if(this.state.author){
        const {name, username, email, address, phone, website, company } = this.state.author
        return (
          <Container>
            <Grid style={{marginTop:'15px', height:'100vh', maxHeight:'600px'}} stackable>
              <Grid.Column width={8}>
                <MyMapComponent
                  coordinates={address.geo}
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUn7ViUvMPSfpR6u4lmKVXW_pAbWYTgok&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%`, width:'100%' }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment>
                  <Image/>
                  <div>Name: {name}</div>
                  <div>Email: {email}</div>
                  <div>Username: {username}</div>
                  <div>Address: {`${address.street} ${address.suite}, ${address.city}, ${address.zipcode.split("-")[0]}`}</div>
                  <div>Phone #: {phone}</div>
                  <div>Website: <a href={"http://"+website} target="_blank">{website}</a></div>
                  <div>
                    Company: 
                    <div style={{marginLeft:'15px'}}>Name: {company.name}</div>
                    <div style={{marginLeft:'15px'}}>Catch-phrase: {company.catchPhrase}</div>
                    <div style={{marginLeft:'15px'}}>BS: {company.bs}</div>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        )
    } else {
      return (
        <Message warning style={{ margin:'20% auto', width:'25%', textAlign:'center'}}>Author not found!</Message>
      )
    }
  }
}

const mapStateToProps = ({authors}) => ({authors})

export default connect(mapStateToProps, null)(Author)
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Link to="/home" onClick={() => this.handleItemClick("home")}>
            <Menu.Item name='Home' active={activeItem === 'home'}  />
          </Link>
          <Link to="/post/new" onClick={() => this.handleItemClick("newpost")}>
            <Menu.Item
              name='New Post'
              active={activeItem === 'newpost'}
            />
          </Link>
        </Menu>
      </div>
    )
  }
}
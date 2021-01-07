import React, { Component } from 'react'

class Header extends Component {

  constructor() {
    super();
    this.state = {
      dropDownView: false
    }
  }

  toggleDropDown = () => {
    this.setState({ dropDownView: !this.state.dropDownView })
  }

  render() {
    return (
      <div className='nav-header'>
        <h2>Photography Stuff</h2>
        <div className='menu-items'>
          <span className='menu-button'>About</span>
          <span className='menu-button'>Projects</span>
          <span className='menu-button'>Contact</span>
        </div>
        <div className='menu-dropdown' onClick={this.toggleDropDown} >
          <div>
            <div className='hamburger' />
            <div className='hamburger' />
            <div className='hamburger' />
          </div>
        </div>
        {this.state.dropDownView
          ? (
            <nav className='mobile-menu'>
              <span>About</span>
              <span>Projects</span>
              <span>Contact</span>
            </nav>
          )
          : null}
      </div>
    )
  }
}
export default Header
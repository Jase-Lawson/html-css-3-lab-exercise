import React, { Component } from 'react'

class Body extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='main-page'>
        <h1>RYANOBULL</h1>
        <h3 className='main-text'>A simple, delightful, and interactive imitation of a future personal project.</h3>
        <button className='button'>Click Here</button>
      </div>
    )
  }
}
export default Body
import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props)
      this.state = { username: '' }
    }
  
    handleChange(event) {}
  
    render() {
      return (
        <form>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
      )
    }
  }
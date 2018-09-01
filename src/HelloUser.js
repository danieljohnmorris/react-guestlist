import React from "react";
import ReactDOM from "react-dom";

class HelloUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "tylermcginnis"
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div>Hello {this.state.username}!</div>
        Change name:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

module.exports = HelloUser;

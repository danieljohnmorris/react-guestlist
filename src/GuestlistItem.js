import React from "react";
import ReactDOM from "react-dom";

class GuestlistItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: this.props.guest
    };
  }
  render() {
    return <div>Guest: {this.state.guest}</div>;
  }
}

module.exports = GuestlistItem;

import React from "react";
import ReactDOM from "react-dom";

class GuestlistItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.guest.first_name} {this.props.guest.last_name}
      </li>
    );
  }
}

module.exports = GuestlistItem;

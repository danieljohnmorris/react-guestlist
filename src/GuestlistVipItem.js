import React from "react";
import ReactDOM from "react-dom";

class GuestlistVipItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        VIP: {this.props.guest.first_name} {this.props.guest.last_name}
      </li>
    );
  }
}

module.exports = GuestlistVipItem;

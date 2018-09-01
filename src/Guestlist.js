import React from "react";
import ReactDOM from "react-dom";
import GuestlistItem from "./GuestlistItem.js";
import GuestlistVipItem from "./GuestlistVipItem.js";

class Guestlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityTitle: this.props.cityTitle || "?",
      eventTitle: this.props.eventTitle || "?",
      items: this.props.items
    };
    // console.log(this.state.items);
  }
  render() {
    var items = [];
    const numItems = this.state.items.length;
    for (var i = 0; i < numItems; i++) {
      var guest = this.state.items[i];
      // console.log(guest);
      if (guest.type == "vip") {
        items.push(<GuestlistVipItem guest={guest} />);
      } else {
        items.push(<GuestlistItem guest={guest} />);
      }
    }

    return (
      <div>
        <h1>
          {this.state.cityTitle} - {this.state.eventTitle}
        </h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

module.exports = Guestlist;

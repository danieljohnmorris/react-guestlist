import React from "react";
import ReactDOM from "react-dom";
import GuestlistItem from "./GuestlistItem.js";

class Guestlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestlist: this.props.guestlist
    };
  }
  render() {
    var items = [];
    const numItems = this.state.guestlist.length;
    console.log(numItems);
    for (var i = 0; i < numItems; i++) {
      console.log(this.props.guestlist[i]);
      items.push(<GuestlistItem guest={this.props.guestlist[i]} />);
    }

    return <ul>{items}</ul>;
  }
}

module.exports = Guestlist;

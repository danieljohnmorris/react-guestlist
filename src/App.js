import React from "react";
import ReactDOM from "react-dom";
import HelloUser from "./HelloUser.js";
import Guestlist from "./Guestlist.js";

// function App() {
//   return <HelloUser username="daniel" />;
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    var guestlistItems = [
      {
        first_name: "Daniel",
        last_name: "Morris",
        email: "dan@sofarsounds.com",
        customer_email: "dan@sofarsounds.com",
        type: "guest",
        attendee_id: "123456",
        order_id: "123456",
        ticket_id: "123456",
        first_time: true
      },
      {
        first_name: "Daniel",
        last_name: "Williams",
        email: "dan.williams@sofarsounds.com",
        group_email: "dan@sofarsounds.com",
        type: "guest",
        attendee_id: "123456",
        order_id: "123456",
        ticket_id: "123337",
        first_time: false
      },
      {
        first_name: "Graham",
        last_name: "Hadgraft",
        email: "graham@sofarsounds.com",
        vip_email: "el.loftie@sofarsounds.com",
        vip_desc: "Staff night out",
        type: "vip"
      }
    ];

    this.state = {
      guestlist: guestlistItems
    };
  }
  render() {
    return <Guestlist guestlist={this.state.guestlist} />;
  }
}

export default App;

import React, { Component } from "react";
class Counter extends Component {
  render() {
    // React.createElement("h1", null, "Hellowrold")
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => console.log("clicked")}>Click Me</button>
      </div>
    );
  }
}

export default Counter;

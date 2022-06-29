import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

class Main extends React.Component {
  render() {
    return (
      //   <div className="container">
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      //   </div>
    );
  }
}

export default Main;

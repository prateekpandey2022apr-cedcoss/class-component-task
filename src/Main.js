import React from "react";
import Content from "./Content";
import LeftSidebar from "./LeftSidebar";
import Sidebar from "./Sidebar";

class Main extends React.Component {
  render() {
    return (
      //   <div className="container">
      <div className="row">
        <LeftSidebar text="ee" />
        <Content />
        <Sidebar text="Who to follow" />
      </div>
      //   </div>
    );
  }
}

export default Main;

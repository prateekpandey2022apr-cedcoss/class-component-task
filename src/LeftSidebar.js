import React from "react";
import Ads from "./Ads";

class LeftSidebar extends React.Component {
  render() {
    return (
      <>
        <div className="col-sm-3">
          <div className="sidebar">
            <Ads text="Profile Dashboard" />
            <Ads text="Trends" />
          </div>
        </div>
      </>
    );
  }
}

export default LeftSidebar;

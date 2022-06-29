import React from "react";
import Ads from "./Ads";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="col-sm-4">
          <div className="sidebar">
            Sidebar Component
            <Ads />
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;

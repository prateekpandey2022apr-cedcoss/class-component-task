import React from "react";
import Ads from "./Ads";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="col-sm-3">
          <div className="sidebar">
            {/* Sidebar Component */}
            <Ads text={this.props.text} />
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;

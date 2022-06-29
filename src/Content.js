import React from "react";
import Ads from "./Ads";

class Content extends React.Component {
  render() {
    return (
      <div className="col-sm-8">
        <div className="content">
          Content Component
          <Ads />
          <Ads />
        </div>
      </div>
    );
  }
}

export default Content;

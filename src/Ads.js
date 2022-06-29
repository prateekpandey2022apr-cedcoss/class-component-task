import React from "react";

class Ads extends React.Component {
  render() {
    return (
      <div className="advert">
        <h4 className="text-center">{this.props.text}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          blanditiis quisquam quae numquam sunt molestiae laboriosam commodi
        </p>
      </div>
    );
  }
}

export default Ads;

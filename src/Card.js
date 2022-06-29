import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            width={50}
            src={this.props.path}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              blanditiis quisquam quae numquam sunt molestiae laboriosam commodi
              vitae voluptas illum repellendus, velit at aliquid adipisci
              possimus, ad error fugiat nihil!
            </p>
            <a href="#" className="btn btn-outline-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

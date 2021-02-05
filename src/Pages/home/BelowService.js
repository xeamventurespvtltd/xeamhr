import React from "react"

class BelowService extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="service-image">
              <img src={this.props.Data.image} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-body">
              <div className="atten-box mb-4">
                <h2>{this.props.Data.heading}</h2>
              </div>
            </div>
            <div className="service-list">
              <ul className="p-0">
                <li>
                  <i className="fas fa-circle"></i>
                  <h5>{this.props.Data.content.line1}</h5>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <h5>{this.props.Data.content.line2}</h5>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <h5>{this.props.Data.content.line3}</h5>
                </li>
              </ul>
            </div>
            <div className="service-btn mt-4">
              <a href="/">Book a Demo</a>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default BelowService
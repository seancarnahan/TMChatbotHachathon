import React, {Component} from 'react';

class YesOrNoBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="yesorno-wrapper">
        <button className="yes-wrap" onClick={this.props.triggerYes}>
          <p className="yes-text">Yes</p>
        </button>
        <button className="no-wrap" onClick={this.props.triggerNo}>
          <p className="no-text">No</p>
        </button>
      </div>
    );
  }
}

export default YesOrNoBoxes;

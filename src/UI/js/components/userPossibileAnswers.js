import React, {Component} from 'react';

class UserPossibleAnswers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recommendations-wrapper">
        <button className="rec1-wrap">
          <p className="rec1-text">I'd like a refund.</p>
        </button>
        <button className="rec2-wrap">
          <p className="rec2-text">I'm having issues with my ticket devlivery.</p>
        </button>
        <button className="rec3-wrap">
          <p className="rec3-text">What is the smart Queue.</p>
        </button>
      </div>
    );
  }
}

export default UserPossibleAnswers;

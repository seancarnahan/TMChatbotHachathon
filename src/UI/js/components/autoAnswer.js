import React, {Component} from 'react';

class AutoAnswer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="AutoAnswer-message-box">
        <p>
          {this.props.message}
        </p>
      </div>
    );
  }
}



export default AutoAnswer;

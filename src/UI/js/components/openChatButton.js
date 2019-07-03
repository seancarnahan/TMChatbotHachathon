import React, {Component} from 'react';
import {Button} from 'react-bootstrap';



class OpenChatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="OpenChatButton">
        <Button type="button" variant="primary" className="OpenChat" onClick={this.props.triggerOpenChat}>OPEN</Button>
      </div>
    );
  }

}
export default OpenChatButton;

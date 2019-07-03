import React, {Component} from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';


class MessageBox extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="message-box">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Ask your questions, here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="input-box-bottom"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Send</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

    );
  }
}

export default MessageBox;

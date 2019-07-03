import React, {Component} from 'react';
import AutoAnswer from './autoAnswer';

class ConversationThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoMessage:  "Hi Guest! How may I help you today?"
    };
    this.updateAutoMessage = this.updateAutoMessage.bind(this);
  }

  updateAutoMessage() {
    this.setState({
      autoMessage: ""
    });
  }

  render() {
    return(
      <div className="conversation-thread-wrapper">
        <AutoAnswer message={this.state.autoMessage}/>
      </div>
    );
  }
}



export default ConversationThread;

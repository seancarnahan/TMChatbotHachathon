import React, {Component} from 'react';
import OpenChatButton from './UI/js/components/openChatButton';
import ChatBoxWrapper from './UI/js/components/chatBoxWrapper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChatOpened: false
    };
    this.openChat = this.openChat.bind(this);
  }

  openChat() {
    this.setState({
      isChatOpened: true
    });
  }

  render() {
    return (
      <div className="App">
        <OpenChatButton triggerOpenChat={this.openChat}/>
      </div>
    );
  }
}

export default App;

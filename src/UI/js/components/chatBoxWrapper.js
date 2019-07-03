import React, {Component} from 'react';

import Header from './header';
import ConversationThread from './conversationThread';
import MessageBox from './messageBox';
import YesOrNoBoxes from './yesOrNoBoxes';

class ChatBoxWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isYes: false
    };
  }

  questionAnsweredCorrectly() {
    console.log("YES");

  }

  questionAnsweredInCorrectly() {
    console.log("NO");

  }



  render() {
    return(
      <div className="ChatBoxWrapper">
        <Header/>
        <ConversationThread/>
        <MessageBox/>
        <YesOrNoBoxes triggerYes={this.questionAnsweredCorrectly} triggerNo={this.questionAnsweredInCorrectly}/>
      </div>
    );
  }
}

export default ChatBoxWrapper;

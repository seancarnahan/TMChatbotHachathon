import React from 'react';

import Header from './header';
import ConversationThread from './conversationThread';
import MessageBox from './messageBox'

function ChatBoxWrapper() {
  return (
    <div className="ChatBoxWrapper">
      <Header/>
      <ConversationThread/>
      <MessageBox/>
    </div>
  );
}

export default ChatBoxWrapper;

import React from 'react';
import Header from './header.js';
import MessageBox from './messageBox'

function ChatBoxWrapper() {
  return (
    <div className="ChatBoxWrapper">
      <Header/>
      <MessageBox/>
    </div>
  );
}

export default ChatBoxWrapper;

import React, {Component} from 'react';
import OpenChatButton from './UI/js/components/openChatButton';
import ChatBoxWrapper from './UI/js/components/chatBoxWrapper';
import './App.css';
import elasticsearch from "elasticsearch";

let client = new elasticsearch.Client({
  host: "127.0.0.1:9200",
  log: "trace"
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChatOpened: false,
      results: []
    };
    this.openChat = this.openChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const search_query = event.target.value;

    client
        .search({
          index: 'faq',
          body: { query: { match : { question : search_query } } }
        })
        .then(
            function(body) {
              this.setState({ results: body.hits.hits });
            }.bind(this),
            function(error) {
              console.trace(error.message);
            }
        );
  }

  openChat() {
    fetch("http://127.0.0.1:9200/_cluster/health")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isChatOpened: true
                //items: result.items
              });
              alert('hello world');
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isChatOpened: false
                //error
              });
            }
        )


  }

  render() {
    const isChatOpened = this.state.isChatOpened;
    return (
        <div>
          {isChatOpened ? (
              <div>
                <ChatBoxWrapper/>
              </div>
          ) : (
              <div className="App">
                <OpenChatButton triggerOpenChat={this.openChat}/>
              </div>
          )}
          <input type="text" onChange={this.handleChange} />
          <SearchResults results={this.state.results} />
        </div>



    );
  }
}


class SearchResults extends Component {
  render() {
    const results = this.props.results || [];

    return (
        <div className="search_results">
          <hr />
          <ul>
            {results.map(result => {
              return (
                  <li key={result._id}>
                    {result._source.question} -> {result._source.answer}
                  </li>
              );
            })}
          </ul>
        </div>
    );
  }
}

export default App;
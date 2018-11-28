import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SockJS from 'sockjs-client';

import Chat from './components/Chat';

class App extends Component {
    constructor(props) {
        super(props);

        //create a new socket connection
        //see documentation https://github.com/sockjs/sockjs-client#getting-started
        const sock = new SockJS('https://chat-server.azurewebsites.net/chat');

        let self = this;

        sock.onopen = () => {
            console.log('connection to server open');
        };

        sock.onmessage = e => {
            console.log('message recieved:', e.data);
            //incoming message from server, store in state
            self.setState({ messages: [...self.state.messages, e.data]});
        };

        sock.onclose = () => {
            console.log('close');
        };

        this.state = {
            actions: sock,
            messages: []
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                    <h2>Chat</h2>
                    <Chat {...this.state}/>
                </header>
            </div>
        );
    }
}

export default App;

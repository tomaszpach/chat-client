import React, {Component} from 'react';

class Chat extends Component {
    handleFormSubmit(e) {
        e.preventDefault();
        let text = this.refs.messageText.value,
            nick = this.refs.nickName.value;

        const nickText = `[${nick}]: ${text}`;
        this.props.actions.send(nickText);
    }

    render() {
        let i = 0,
            messages = this.props.messages.map(message => {
               return <li className="list-group-item" key={i++} style={{color: '#000'}}>{message}</li>
            });
        return (
            <div className="container">
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <div className="form-group">
                        <div className="input-group">
                            <input placeholder="nick" type="text" ref="nickName" className="form-control"/>
                            <input placeholder="message" type="text" ref="messageText" className="form-control"/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-prime">Send</button>
                            </span>
                        </div>
                    </div>
                </form>
                <ul className="list-group">{messages}</ul>
            </div>
        );
    }
}

export default Chat;

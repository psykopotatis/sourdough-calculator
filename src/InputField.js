import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        };
    }

    onInputChange(event) {
        const userInput = event.target.value;
        this.setState({ userInput: userInput });
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text"
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                           className="form-control form-control-lg"
                           id="inputField"
                           placeholder="Enter street"
                    />
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </form>
        );
    }
}

export default InputField;
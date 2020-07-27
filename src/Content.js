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
                    <label htmlFor="flourInput">Mjöl</label>
                    <input type="text"
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                           className="form-control form-control-lg"
                           id="flourInput"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="waterInput">Vatten</label>
                    <input type="text"
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                           className="form-control form-control-lg"
                           id="waterInput"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sourdoughInput">Surdeg</label>
                    <input type="text"
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                           className="form-control form-control-lg"
                           id="sourdoughInput"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="saltInput">Salt</label>
                    <input type="text"
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                           className="form-control form-control-lg"
                           id="waterInput"
                    />
                </div>

                <button type="button" className="btn btn-primary">Primary</button>

            </form>
        );
    }
}

export default InputField;
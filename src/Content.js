import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toGrams: true,
            toPercentage: false,
            flour: 1000,
            water: 0,
            waterPercent: 80,
            sourdough: 0,
            sourdoughPercent: 15,
            salt: 0,
            saltPercent: 2

        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);        
        this.onInputChange = this.onInputChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('click');
        console.table(this.state);
        this.calculateGrams();
    };

    calculateGrams() {
        console.log('calculateGrams');
        const water = this.state.flour * (this.state.waterPercent / 100);
        const sourdough = this.state.flour * (this.state.sourdoughPercent / 100);
        const salt = this.state.flour * (this.state.saltPercent / 100);
        this.setState({
            water: water,
            sourdough: sourdough,
            salt: salt,
        });
    };

    onInputChange(event) {
        console.log('onInputChange: ' + event.target.name + '=' + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onRadioChange(event) {
        console.log('onRadioChange: ' + event.target.name + '=' + event.target.checked);
        if (event.target.name === 'toGrams') {
            this.setState({
                toGrams: true,
                toPercentage: false,
            });
        } else {
            this.setState({
                toGrams: false,
                toPercentage: true,
            });
        }
    };

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-sm">
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="toGrams"
                                   id="exampleRadios1"
                                   value="option1"
                                   onChange={this.onRadioChange}
                                   checked={this.state.toGrams}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Räkna procent till gram
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="toPercentage"
                                   id="exampleRadios2"
                                   value="option2"
                                   onChange={this.onRadioChange}
                                   checked={this.state.toPercentage}
                            />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Räkna gram till procent
                                </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="flourInput">Mjöl gram</label>
                            <input type="text"
                                   value={this.state.flour}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="flour"
                                   id="flourInput"
                            />
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="waterInput">Vatten gram</label>
                            <input type="text"
                                   value={this.state.water}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="water"
                                   id="waterInput"
                                   disabled={this.state.toGrams}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="waterPercentInput">Vatten %</label>
                            <input type="text"
                                   value={this.state.waterPercent}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="waterPercent"
                                   id="waterPercentInput"
                                   disabled={this.state.toPercentage}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="sourdoughInput">Surdeg gram</label>
                            <input type="text"
                                   value={this.state.sourdough}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="sourdough"
                                   id="sourdoughInput"
                                   disabled={this.state.toGrams}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="sourdoughPercentInput">Surdeg %</label>
                            <input type="text"
                                   value={this.state.sourdoughPercent}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="sourdoughPercent"
                                   id="sourdoughPercentInput"
                                   disabled={this.state.toPercentage}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="form-group">
                            <label htmlFor="saltInput">Salt gram</label>
                            <input type="text"
                                   value={this.state.salt}
                                   onChange={this.onInputChange}
                                   className="form-control form-control-lg"
                                   name="salt"
                                   id="saltInput"
                                   disabled={this.state.toGrams}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                                <label htmlFor="saltPercentInput">Salt %</label>
                                <input type="text"
                                       value={this.state.saltPercent}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="saltPercent"
                                       id="saltPercentInput"
                                   disabled={this.state.toPercentage}
                                />
                            </div>
                    </div>
                </div>

                <button type="button" onClick={this.handleClick} className="btn btn-primary">Räkna!</button>
            </form>
        );
    }
}

export default InputField;
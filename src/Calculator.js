import React, {Component} from 'react';
import './Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flour: 1000,
            water: 800,
            waterPercent: 80,
            sourdough: 150,
            sourdoughPercent: 15,
            salt: 20,
            saltPercent: 2
        };

        this.handleClick = this.handleClick.bind(this);
        this.onFlourInputChange = this.onFlourInputChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.calculateGrams();
    };

    calculateGrams() {

    };

    onInputChange(event) {
        const percent = parseInt(event.target.value) || 0;
        const grams = this.state.flour * (percent / 100);
        const key = event.target.name.replace('Percent', '');

        this.setState({
            [event.target.name]: percent,
            [key]: grams
        });
    };

    onFlourInputChange(event) {
        const flour = parseInt(event.target.value) || 0;

        const water = flour * (this.state.waterPercent / 100);
        const sourdough = flour * (this.state.sourdoughPercent / 100);
        const salt = flour * (this.state.saltPercent / 100);

        this.setState({
            flour: flour,
            water: water,
            sourdough: sourdough,
            salt: salt,
        });
    };

    handleFocus(event) {
        event.target.select();
    };

    render() {
        return (
            <React.Fragment>
                <div className="mb-5">
                    <form>
                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label" htmlFor="flourInput">Mjöl (gram)</label>
                            </div>
                        </div>

                        <div className="row input-row">
                            <div className="col-sm first-col mb-2">
                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.flour}
                                               onFocus={this.handleFocus}
                                               onChange={this.onFlourInputChange}
                                               className="form-control form-control-lg"
                                               name="flour"
                                               id="flourInput"
                                        />
                                        <p>g</p>
                                    </div>
                                    <small id="flourHelp" className="form-text text-muted">Alla ingredienser beräknas
                                        utifrån mjölet.</small>
                                </div>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label" htmlFor="waterPercentInput">Vatten</label>
                            </div>
                        </div>

                        <div className="row input-row mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.waterPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="waterPercent"
                                               id="waterPercentInput"
                                        />
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <div className="input-wrapper">

                                        <input type="text"
                                               value={this.state.water}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="water"
                                               id="waterInput"
                                        />
                                        <p>g</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label" htmlFor="sourdoughPercentInput">Surdeg</label>
                            </div>
                        </div>

                        <div className="row input-row  mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.sourdoughPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="sourdoughPercent"
                                               id="sourdoughPercentInput"
                                        />
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.sourdough}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="sourdough"
                                               id="sourdoughInput"
                                        />
                                        <p>g</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label" htmlFor="saltPercentInput">Salt</label>
                            </div>
                        </div>

                        <div className="row input-row mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.saltPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="saltPercent"
                                               id="saltPercentInput"
                                        />
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.salt}
                                               onChange={this.onInputChange}
                                               className="form-control form-control-lg"
                                               name="salt"
                                               id="saltInput"
                                        />
                                        <p>g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Calculator;
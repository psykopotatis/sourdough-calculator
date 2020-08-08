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
        this.calculatePercentToWeight = this.calculatePercentToWeight.bind(this);
        this.calculateWeightToPercent = this.calculateWeightToPercent.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.calculateGrams();
    };

    calculateGrams() {

    };

    calculatePercentToWeight(event) {
        const percent = parseInt(event.target.value) || 0;
        let grams = this.round(this.state.flour * (percent / 100));
        const key = event.target.name.replace('Percent', '');

        this.setState({
            [event.target.name]: percent,
            [key]: grams
        });
    };

    calculateWeightToPercent(event) {
        const grams = parseInt(event.target.value) || 0;
        let percent = this.round((grams / this.state.flour) * 100);
        const key = event.target.name + 'Percent';

        this.setState({
            [key]: percent,
            [event.target.name]: grams
        });
    };

    round(n) {
        if (this.isFloat(n)) {
            return n.toFixed(1);
        }

        return n;
    };

    isFloat(n) {
        return n % 1 !== 0;
    };

    onFlourInputChange(event) {
        const flour = parseInt(event.target.value) || 0;

        const water = this.round(flour * (this.state.waterPercent / 100));
        const sourdough = this.round(flour * (this.state.sourdoughPercent / 100));
        const salt = this.round(flour * (this.state.saltPercent / 100));

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
                                <label className="calculator-label" htmlFor="flourInput">Flour</label>
                            </div>
                        </div>

                        <div className="row input-row">
                            <div className="col-sm first-col">
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
                                    <small id="flourHelp" className="form-text text-muted">All ingredients are calculated from the flour.</small>
                                </div>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label" htmlFor="waterPercentInput">Water</label>
                            </div>
                        </div>

                        <div className="row input-row mb-3">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.waterPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.calculatePercentToWeight}
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
                                               onFocus={this.handleFocus}
                                               onChange={this.calculateWeightToPercent}
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
                                <label className="calculator-label" htmlFor="sourdoughPercentInput">Sourdough</label>
                            </div>
                        </div>

                        <div className="row input-row mb-3">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.sourdoughPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.calculatePercentToWeight}
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
                                               onFocus={this.handleFocus}
                                               onChange={this.calculateWeightToPercent}
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

                        <div className="row input-row mb-2">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.saltPercent}
                                               onFocus={this.handleFocus}
                                               onChange={this.calculatePercentToWeight}
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
                                               onFocus={this.handleFocus}
                                               onChange={this.calculateWeightToPercent}
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
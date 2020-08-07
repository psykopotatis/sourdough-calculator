import React, {Component} from 'react';
import './Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flour: 1000,
            water: 0,
            waterPercent: 80,
            sourdough: 0,
            sourdoughPercent: 15,
            salt: 0,
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

    render() {
        return (
            <React.Fragment>
                <div className="mb-5">
                    <form>
                        <div className="row input-row">
                            <div className="col-sm first-col mb-2">
                                <div className="form-group">
                                    <label htmlFor="flourInput">Mjöl (gram)</label>
                                    <input type="text"
                                           value={this.state.flour}
                                           onChange={this.onFlourInputChange}
                                           className="form-control form-control-lg"
                                           name="flour"
                                           id="flourInput"
                                    />
                                    <small id="flourHelp" className="form-text text-muted">Alla ingredienser beräknas utifrån mjölet.</small>
                                </div>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <h5>Vatten</h5>
                            </div>
                        </div>

                        <div className="row input-row mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.waterPercent}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="waterPercent"
                                           id="waterPercentInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.water}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="water"
                                           id="waterInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">g</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <h5>Surdeg</h5>
                            </div>
                        </div>

                        <div className="row input-row  mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.sourdoughPercent}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="sourdoughPercent"
                                           id="sourdoughPercentInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.sourdough}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="sourdough"
                                           id="sourdoughInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">g</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm">
                                <h5>Salt</h5>
                            </div>
                        </div>

                        <div className="row input-row mb-4">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.saltPercent}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="saltPercent"
                                           id="saltPercentInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group">
                                    <input type="text"
                                           value={this.state.salt}
                                           onChange={this.onInputChange}
                                           className="form-control form-control-lg"
                                           name="salt"
                                           id="saltInput"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">g</span>
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
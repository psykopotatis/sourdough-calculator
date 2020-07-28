import React, {Component} from 'react';

class ToGrams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOutput: false,
            flour: 1000,
            water: 0,
            waterPercent: 0,
            sourdough: 0,
            sourdoughPercent: 0,
            salt: 0,
            saltPercent: 0

        };

        this.handleClick = this.handleClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.calculatePercentages();
    };

    calculatePercentages() {
        const waterPercent = (this.state.water / this.state.flour) * 100;
        const sourdoughPercent = (this.state.sourdough / this.state.flour) * 100;
        const saltPercent = (this.state.salt / this.state.flour) * 100;

        this.setState({
            showOutput: true,
            waterPercent: waterPercent,
            sourdoughPercent: sourdoughPercent,
            saltPercent: saltPercent,
        });
    };

    onInputChange(event) {
        console.log('onInputChange: ' + event.target.name + '=' + event.target.value);
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col-sm mb-2">
                            <div className="form-group">
                                <label htmlFor="flourInput">Mjöl (gram)</label>
                                <input type="text"
                                       value={this.state.flour}
                                       onChange={this.onInputChange}
                                       className="form-control form-control-lg"
                                       name="flour"
                                       id="flourInput"
                                />
                                <small id="flourHelp" className="form-text text-muted">Man utgår från mjölet. Det är 100% och andra ingredienser beräknas utifrån det.</small>
                            </div>
                        </div>
                        <div className="col-sm">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            {this.renderWaterInput()}
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderWaterPercentInput() : null}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            {this.renderSourdoughInput()}
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderSourdoughPercentInput() : null}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            {this.renderSaltInput()}
                        </div>
                        <div className="col-sm">
                            {this.state.showOutput ? this.renderSaltPercentInput() : null}
                        </div>
                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Räkna</button>
                </form>
            </div>
        );
    }

    renderWaterInput() {
        return (
            <div className="form-group">
                <label htmlFor="waterInput">Vatten (gram)</label>
                <input type="text"
                       value={this.state.water}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="water"
                       id="waterInput"
                />
            </div>
        );
    }

    renderWaterPercentInput() {
        return (
            <div className="form-group">
                <label htmlFor="waterPercentInput">Vatten (%)</label>
                <input type="text"
                       value={this.state.waterPercent}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="waterPercent"
                       id="waterPercentInput"
                       disabled

                />
            </div>
        );
    }

    renderSourdoughInput() {
        return (
            <div className="form-group">
                <label htmlFor="sourdoughInput">Surdeg (gram)</label>
                <input type="text"
                       value={this.state.sourdough}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="sourdough"
                       id="sourdoughInput"
                />
            </div>
        );
    }

    renderSourdoughPercentInput() {
        return (
            <div className="form-group">
                <label htmlFor="sourdoughPercentInput">Surdeg (%)</label>
                <input type="text"
                       value={this.state.sourdoughPercent}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="sourdoughPercent"
                       id="sourdoughPercentInput"
                       disabled

                />
            </div>
        );
    };

    renderSaltInput() {
        return (
            <div className="form-group">
                <label htmlFor="saltInput">Salt (gram)</label>
                <input type="text"
                       value={this.state.salt}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="salt"
                       id="saltInput"
                />
            </div>
        );
    };

    renderSaltPercentInput() {
        return (
            <div className="form-group">
                <label htmlFor="saltPercentInput">Salt (%)</label>
                <input type="text"
                       value={this.state.saltPercent}
                       onChange={this.onInputChange}
                       className="form-control form-control-lg"
                       name="saltPercent"
                       id="saltPercentInput"
                       disabled
                />
            </div>
        );
    }
}

export default ToGrams;
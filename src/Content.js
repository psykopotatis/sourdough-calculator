import React, {Component} from 'react';
import ToGrams from './ToGrams';
import ToPercentage from "./ToPercentage";


class Content extends Component {
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

        this.handleClick = this.handleClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.table(this.state);
        if (this.state.toGrams) {
            this.calculateGrams();
        } else {
            this.calculatePercentages();
        }
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

    calculatePercentages() {
        console.log('calculatePercentages');
        const waterPercent = (this.state.water / this.state.flour) * 100;
        this.setState({
            waterPercent: waterPercent
        });
    };

    onInputChange(event) {
        console.log('onInputChange: ' + event.target.name + '=' + event.target.value);
        this.setState({
            [event.target.name]: parseInt(event.target.value)
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
            <div>
                <div className="row">
                    <div className="col-sm mb-5">
                        <form>
                            {this.renderRadioButtons()}
                        </form>
                    </div>
                </div>

                { this.state.toGrams ? <ToGrams/> : <ToPercentage/> }
            </div>
        );
    };

    renderRadioButtons() {
        return (
            <div>
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
                        Procent till gram
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
                        Gram till procent
                    </label>
                </div>
            </div>
        );
    };
}

export default Content;
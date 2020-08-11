import React, {Component} from 'react';
import './Calculator.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import map from 'lodash/map';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                flour: {
                    weight: 1000,
                    percent: 100,
                    selected: true
                },
                water: {
                    weight: 800,
                    percent: 80,
                    selected: true
                },
                sourdough: {
                    weight: 150,
                    percent: 15,
                    selected: true
                },
                salt: {
                    weight: 20,
                    percent: 2,
                    selected: true
                },

            },
            showModal: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.onFlourInputChange = this.onFlourInputChange.bind(this);
        this.calculatePercentToWeight = this.calculatePercentToWeight.bind(this);
        this.calculateWeightToPercent = this.calculateWeightToPercent.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderCheckboxes = this.renderCheckboxes.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.calculateGrams();
    };

    calculateGrams() {

    };

    calculatePercentToWeight(event) {
        const percent = parseInt(event.target.value) || 0;
        let weight = this.round(this.state.ingredients.flour.weight * (percent / 100));
        const key = event.target.name.replace('Percent', '');
        console.log('calculatePercentToWeight', percent, weight, key);

        let ingredients = Object.assign({}, this.state.ingredients);
        ingredients[key].weight = weight;
        ingredients[key].percent = percent;

        this.setState(ingredients);
    };

    calculateWeightToPercent(event) {
        const weight = parseInt(event.target.value) || 0;
        let percent = this.round((weight / this.state.ingredients.flour.weight) * 100);
        const key = event.target.name;
        console.log('calculateWeightToPercent', percent, weight, key);

        let ingredients = Object.assign({}, this.state.ingredients);
        ingredients[key].weight = weight;
        ingredients[key].percent = percent;

        this.setState(ingredients);
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

    handleShow() {
        this.setState({
            showModal: true
        })
    };

    handleClose() {
        this.setState({
            showModal: false
        })
    };

    renderRow(ingredient, ingredientKey) {
        if (!ingredient.selected) {
            return null;
        }

        return (
            <React.Fragment key={ingredientKey}>
                <div className="row">
                    <div className="col-sm">
                        <label className="calculator-label" htmlFor={ingredientKey + "PercentInput"}>{ingredientKey}</label>
                    </div>
                </div>

                <div className="row input-row mb-3">
                    <div className="col-sm first-col">
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input type="text"
                                       value={ingredient.percent}
                                       onFocus={this.handleFocus}
                                       onChange={this.calculatePercentToWeight}
                                       className="form-control form-control-lg"
                                       name={ingredientKey + "Percent"}
                                       id={ingredientKey + "PercentInput"}
                                />
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input type="text"
                                       value={ingredient.weight}
                                       onFocus={this.handleFocus}
                                       onChange={this.calculateWeightToPercent}
                                       className="form-control form-control-lg"
                                       name={ingredientKey}
                                       id={ingredientKey + "Input"}
                                />
                                <p>g</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    renderCheckboxes(ingredient, ingredientKey) {
        return (
            <React.Fragment key={ingredientKey+ingredient.weight}>
                <div className="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox"
                           name={ingredientKey}
                           className="custom-control-input"
                           id={ingredientKey}
                           onChange={this.onCheckboxChange}
                           checked={this.state.ingredients[ingredientKey].selected}
                    />
                    <label className="custom-control-label" htmlFor={ingredientKey}>{ingredientKey}</label>
                </div>
            </React.Fragment>
        );
    };

    onCheckboxChange(event) {
        let ingredients = Object.assign({}, this.state.ingredients);
        const ingredientKey = event.target.name;
        ingredients[ingredientKey].selected = !ingredients[ingredientKey].selected;

        this.setState(ingredients);
    };

    render() {
        return (
            <React.Fragment>
                <div className="mb-5">
                    <form id="calculatorForm">
                        {map(this.state.ingredients, this.renderRow)}
                    </form>
                </div>

                <Button variant="primary" onClick={this.handleShow}>
                    Add ingredients
                </Button>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Ingredients</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {map(this.state.ingredients, this.renderCheckboxes)}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Calculator;
import React, {Component} from 'react';
import './Calculator.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import map from 'lodash/map';
import each from 'lodash/each';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flour: {
                name: 'Mjöl',
                weight: 1000,
                percent: 100,
                selected: true
            },
            ingredients: {
                water: {
                    name: 'Vatten',
                    weight: 800,
                    percent: 80,
                    selected: true
                },
                milk: {
                    name: 'Mjölk',
                    weight: 0,
                    percent: 0,
                    selected: false
                },
                yoghurt: {
                    name: 'Yoghurt',
                    weight: 0,
                    percent: 0,
                    selected: false
                },
                sourdough: {
                    name: 'Surdeg',
                    weight: 150,
                    percent: 15,
                    selected: true
                },
                butter: {
                    name: 'Smör',
                    weight: 0,
                    percent: 0,
                    selected: false
                },
                salt: {
                    name: 'Salt',
                    weight: 20,
                    percent: 2,
                    selected: true
                },
                sugar: {
                    name: 'Socker',
                    weight: 0,
                    percent: 0,
                    selected: false
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
        let weight = this.round(this.state.flour.weight * (percent / 100));
        const key = event.target.name.replace('Percent', '');
        console.log('calculatePercentToWeight', percent, weight, key);

        let ingredients = Object.assign({}, this.state.ingredients);
        ingredients[key].weight = weight;
        ingredients[key].percent = percent;

        this.setState(ingredients);
    };

    calculateWeightToPercent(event) {
        const weight = parseInt(event.target.value) || 0;
        let percent = this.round((weight / this.state.flour.weight) * 100);
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

        let ingredients = Object.assign({}, this.state.ingredients);
        each(ingredients, (val, key) => {
            val.weight = this.round(flour * (val.percent / 100));
        });

        this.setState({
                flour: {
                    weight: flour,
                    percent: 100,
                    selected: true
                },
                ingredients
            }
        );

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
                        <label className="calculator-label"
                               htmlFor={ingredientKey + "PercentInput"}>{ingredient.name}</label>
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
            <React.Fragment key={ingredientKey + ingredient.weight}>
                <div className="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox"
                           name={ingredientKey}
                           className="custom-control-input"
                           id={ingredientKey}
                           onChange={this.onCheckboxChange}
                           checked={this.state.ingredients[ingredientKey].selected}
                    />
                    <label className="custom-control-label" htmlFor={ingredientKey}>{ingredient.name}</label>
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
                        <div className="row">
                            <div className="col-sm">
                                <label className="calculator-label"
                                       htmlFor="flourInput">Mjöl</label>
                            </div>
                        </div>

                        <div className="row input-row mb-3">
                            <div className="col-sm first-col">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <input type="text"
                                               value={this.state.flour.weight}
                                               onFocus={this.handleFocus}
                                               onChange={this.onFlourInputChange}
                                               className="form-control form-control-lg"
                                               name="flour"
                                               id="flourInput"
                                        />
                                        <p>g</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>
                        {map(this.state.ingredients, this.renderRow)}
                    </form>
                </div>

                <Button variant="primary" onClick={this.handleShow}>
                    Ändra ingredienser
                </Button>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ändra ingredienser</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="custom-control custom-checkbox checkbox-lg">
                                <input type="checkbox"
                                       name="flourCheckbox"
                                       className="custom-control-input"
                                       id="flourCheckbox"
                                       checked
                                       disabled
                                />
                                <label className="custom-control-label"
                                       htmlFor="flourCheckbox">Mjöl</label>
                            </div>
                                {map(this.state.ingredients, this.renderCheckboxes)}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Stäng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
    );
    }
    }

    export default Calculator;
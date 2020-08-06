import React, {Component} from 'react';
import ToGrams from './ToGrams';


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

    }


    render() {
        return (
            <div>
                <ToGrams/>
            </div>
        );
    };
}

export default Content;
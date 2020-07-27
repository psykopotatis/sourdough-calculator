import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Content";

function App() {
    return (
        <div>
            <div className="container">
                <Header/>
                <Content/>
                <Footer/>
            </div>        
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

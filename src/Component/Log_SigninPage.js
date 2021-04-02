import React, { Component } from 'react';
import LoginForm from "./LogInComponent"
import LoginSteps from "./LoginStepsComponent"

class Log_SigninPage extends Component {
    render() {
        return (
            <div className="page_container row">
                <div className="col-12 col-md-6 d-flex justify-content-center"><LoginSteps></LoginSteps></div>
                <div className="col-12 col-md-6 d-flex justify-content-center"> <LoginForm></LoginForm></div>
              
            </div>
        );
    }
}

export default Log_SigninPage;
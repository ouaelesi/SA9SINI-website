import React, { Component } from 'react';
import QuesIcon from '../assets/imgs/ask_ques.png'
import ReplieIcon from '../assets/imgs/answer.png'
import Validatecon from '../assets/imgs/validate.png'
class LoginSteps extends Component {
    render() {
        return (
            <div className="loginstepsContainer ">
                <div className="JOINUS">
                    Join Us
                </div>
                <div className="loginsteps">
                    <div className="loginstep my-3"><img className="mr-3" src={QuesIcon} width="60px"></img> this is a step to log in </div>
                    <div className="loginstep my-3"><img className="mr-3" src={ReplieIcon} width="60px"></img> this is a step to log in </div>
                    <div className="loginstep my-3"><img className="mr-3" src={Validatecon} width="60px"></img> this is a step to log in </div>
                </div>
            </div>
        );
    }
}

export default LoginSteps;
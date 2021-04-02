import React, { Component } from 'react';
import QuestionBody from "./QuestionBodyComponent"
import AskingSteps from "./AskingStepsComponent"

class AskQuestions extends Component {
    render() {
        return ( 
            <div className="QuestionStepscontainer ">
           <div className="AskQuestions">
                <div className="row">
                    
                    <div className="col-12 col-md-8 my-4 ">
                     <QuestionBody></QuestionBody>
                    </div>
                    <div className="col-sm-8 col-11 col-md-4 ml-auto mr-auto order-first order-md-last">
                    <AskingSteps></AskingSteps>
                    </div>
                </div>
            </div>
         </div> 
 
        );
    }
}

export default AskQuestions;
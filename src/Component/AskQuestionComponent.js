import React, { Component } from 'react';
import QuestionBody from "./QuestionBodyComponent"
import AskingSteps from "./AskingStepsComponent"

class AskQuestions extends Component {
    render() {
        return ( 
            <div className="QuestionStepscontainer">
           <div className="AskQuestions container">
                <div className="row">
                    
                    <div className="col-8">
                     <QuestionBody></QuestionBody>
                    </div>
                    <div className="col-4">
                    <AskingSteps></AskingSteps>
                    </div>
                </div>
            </div>
         </div> 
 
        );
    }
}

export default AskQuestions;
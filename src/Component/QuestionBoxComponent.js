import react, { Component } from 'react'
import {Row} from 'reactstrap'


class QuestionBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
               <div className="Question_info">
               <img src={this.props.user_photo}></img> Asked {this.props.Time}     
               </div>
               <div className="">
                <p className="question">{this.props.Question}</p>
                <p className="question_details">{this.props.More_details}</p>
                 <Row classnam="question_stat row">
                    <div className="col-3"></div>  
                    <div className="col-3"></div>  
                    <div className="col-3"></div>  
                    <div className="col-3"></div>  
                 </Row>  
               </div>
               <hr></hr>
            </>
        );
    }
}

export default QuestionBox ; 
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
               <div className="question_section">
                <p className="question">{this.props.Question}</p>
                <p className="question_details">{this.props.More_details}</p>
                <div className="stat">
                <Row className="info_row ">
                    <div className="col-3">
                        <button className="btn">{this.props.number_of_answers} Answers</button>
                        </div>  
                    <div className="col-3">
                    <button className="btn"><i className="fa fa-comment-alt"></i>{this.props.number_of_views} views </button> </div>  
                    <div className="col-3"></div>  
                    <div className="col-3"><button className="btn btn_answer">Answer</button></div>  
                 </Row>  
                </div>
               
               </div>
               <hr></hr>
            </>
        );
    }
}

export default QuestionBox ; 
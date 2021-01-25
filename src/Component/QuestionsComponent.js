import react, { Component } from 'react'
import QuestionBox from './QuestionBoxComponent'

class Questions extends Component{
  render(){
      let Question = [
        {
            user_photo: "" ,
            Time: "Today 14h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?"
        },
        {
            user_photo: "" ,
            Time: "Today 14h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?"
        },
        {
            user_photo: "" ,
            Time: "Today 14h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?"
        },
      ]; 

      return(
        <>
        <div className="container">
        <QuestionBox Time={Question[0].Time} user_photo={Question[0].user_photo} More_details={Question[0].More_details} Question={Question[0].Question}/>
        <QuestionBox Time={Question[1].Time} user_photo={Question[1].user_photo} More_details={Question[1].More_details} Question={Question[1].Question}/>
        <QuestionBox Time={Question[2].Time} user_photo={Question[2].user_photo} More_details={Question[2].More_details} Question={Question[2].Question}/></div> 

        </>
      ); 
  }
}

export default Questions ; 
import react, { Component } from 'react'
import QuestionBox from './QuestionBoxComponent'
import QuestionsMenu from './QuestionsMenu';
import NextPrevious from './NextPreviousComponent';


class Questions extends Component{

  render(){
      let Question = [
        {
            user_photo: "./assets/imgs/twitter_icon.png" ,
            Time: "Today 1:50h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
            number_of_answers :0 ,
            number_of_views : 12
        },
        {
          user_photo: "./assets/imgs/twitter_icon.png" ,
          Time: "Today 4:20h",
          More_details: "Some description about your question or more details to get it clair ….",
          Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
          number_of_answers : 5,
          number_of_views : 12
        },
        {
          user_photo: "./assets/imgs/twitter_icon.png" ,
          Time: "Today 8:20h",
          More_details: "Some description about your question or more details to get it clair ….",
          Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
          number_of_answers : 6,
          number_of_views : 12
        },
        {
        user_photo: "./assets/imgs/twitter_icon.png" ,
        Time: "Today 14:15h",
        More_details: "Some description about your question or more details to get it clair ….",
        Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
        number_of_answers : 6,
        number_of_views : 12
        },
        {
            user_photo: "./assets/imgs/twitter_icon.png" ,
            Time: "Today 4:20h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
            number_of_answers : 5,
            number_of_views : 12
        },
        {
            user_photo: "./assets/imgs/twitter_icon.png" ,
            Time: "Today 8:20h",
            More_details: "Some description about your question or more details to get it clair ….",
            Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
            number_of_answers : 6,
            number_of_views : 12
        },
        {
          user_photo: "./assets/imgs/twitter_icon.png" ,
          Time: "Today 14:15h",
          More_details: "Some description about your question or more details to get it clair ….",
          Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
          number_of_answers : 6,
          number_of_views : 12
      },
      {
        user_photo: "./assets/imgs/twitter_icon.png" ,
        Time: "Today 13:30h",
        More_details: "Some description about your question or more details to get it clair ….",
        Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
        number_of_answers : 6,
        number_of_views : 12
    },
      ]; 

      return(
        <>
        <div className="Question_container">
        <div className="Questions_section">
        <QuestionsMenu></QuestionsMenu>
        {Question.map ((elem,key) => (
        <QuestionBox Time={elem.Time} 
                        user_photo={elem.user_photo}
                        More_details={elem.More_details} 
                        Question={elem.Question}
                        number_of_answers={elem.number_of_answers}
                        number_of_views={elem.number_of_views}/>
         ))}
              <NextPrevious></NextPrevious>            
                     </div> 
        </div>
        

        </>
      ); 
  }
}

export default Questions ; 
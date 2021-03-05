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
        Time: "Today 13:30h",
        More_details: "Some description about your question or more details to get it clair ….",
        Question: "Rice weighing 33/4 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?",
        number_of_answers : 6,
        number_of_views : 12
    },
      ]; 

      function render_questions(Quesions){
        Question.forEach( elem => {
          
        });
      }

      return(
        <>
        <div className="Question_container">
        <div className="container">
        <QuestionsMenu></QuestionsMenu>
        <QuestionBox Time={Question[0].Time} 
                     user_photo={Question[0].user_photo}
                      More_details={Question[0].More_details} 
                      Question={Question[0].Question}
                      number_of_answers={Question[0].number_of_answers}
                      number_of_views={Question[0].number_of_views}/>
        <QuestionBox Time={Question[1].Time} 
                     user_photo={Question[1].user_photo}
                      More_details={Question[1].More_details} 
                      Question={Question[1].Question}
                      number_of_answers={Question[1].number_of_answers}
                      number_of_views={Question[0].number_of_views}/>
        <QuestionBox Time={Question[2].Time} 
                     user_photo={Question[2].user_photo} 
                     More_details={Question[2].More_details} 
                     Question={Question[2].Question}
                     number_of_answers={Question[2].number_of_answers}
                     number_of_views={Question[0].number_of_views}/>
       <QuestionBox Time={Question[2].Time} 
                     user_photo={Question[2].user_photo} 
                     More_details={Question[2].More_details} 
                     Question={Question[2].Question}
                     number_of_answers={Question[2].number_of_answers}
                     number_of_views={Question[0].number_of_views}/>
      <QuestionBox Time={Question[2].Time} 
                     user_photo={Question[2].user_photo} 
                     More_details={Question[2].More_details} 
                     Question={Question[2].Question}
                     number_of_answers={Question[2].number_of_answers}
                     number_of_views={Question[0].number_of_views}/>
              <NextPrevious></NextPrevious>            
                     </div> 
        </div>
        

        </>
      ); 
  }
}

export default Questions ; 
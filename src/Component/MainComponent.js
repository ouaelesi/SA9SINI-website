import react, { Component} from "react"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from "./HomeComponent"
import AboutUs from "./AboutComponent"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Questions from "./QuestionsComponent"
import LoginForm from "./LogInComponent"
import AskQuestions from "./AskQuestionComponent"
import Footer_ from "./Footer_Component"

class Main extends Component{
  render(){
    const homepage = () => {
        return(
            <Home/>
        );
    }
    const aboutuspage = () => {
        return(
            <AboutUs/>
        );

    }
    const Question = () => {
      return(
        <Questions/>
      );
  
    }
    const Login = () => {
      return(
        <LoginForm/>
      ); 
    }

    const AskQuestion = () => {
      return(
        <AskQuestions/>
      ); 
    }

    return(
      <>  
        <Header/>
        <Switch>
            <Route path='/home' component={homepage} /> 
            <Route path="/aboutus" component={aboutuspage}/>
            <Route path="/Questions" component={Question}/>
            <Route path="/login" component={Login}/>
            <Route path="/AskQuestion" component={AskQuestion}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </>
    ); 
  
  }
}
export default withRouter(Main); 
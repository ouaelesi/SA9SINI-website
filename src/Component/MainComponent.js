import react, { Component} from "react"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from "./HomeComponent"
import AboutUs from "./AboutComponent"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Questions from "./QuestionsComponent"
import Log_SigninPage from "./Log_SigninPage"
import AskQuestions from "./AskQuestionComponent"
import LoginComponent from "./Login_Component";

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
    const Signin = () => {
      return(
        <Log_SigninPage/>
      ); 
    }

    const AskQuestion = () => {
      return(
        <AskQuestions/>
      ); 
    }
    const Login = () => {
      return( <LoginComponent/>) ; 
     
    }
    return(
      <>  
        <Header/>
        <Switch>
            <Route path='/home' component={homepage} /> 
            <Route path="/aboutus" component={aboutuspage}/>
            <Route path="/Questions" component={Question}/>
            <Route path="/Signin" component={Signin}/>
            <Route path="/AskQuestion" component={AskQuestion}/>
            <Route path="/Login" component={Login}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </>
    ); 
  
  }
}
export default withRouter(Main); 
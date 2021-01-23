import react, { Component} from "react"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from "./HomeComponent"
import AboutUs from "./AboutComponent"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"

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

    return(
      <>  
        <Header/>
        <Switch>
            <Route path='/home' component={homepage} /> 
            <Route path="/aboutus" component={aboutuspage}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </>
    ); 
  
  }
}
export default withRouter(Main); 
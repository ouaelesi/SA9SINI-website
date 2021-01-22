import react, { Component} from "react"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Welcome from './WelcomeComponent'

class Main extends Component{
  render(){
      return(
          <div>
              <Header/>
              <Welcome/>
              <Footer/>
          </div> 
      );
  }
}

export default Main;
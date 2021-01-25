import react, { Component } from "react"
import WhoAreWe from "./WhoAreWeComponent"
import SocialMedia from './SocialMediaPathComponent'

class AboutUs extends Component{
    render(){
         return(
             <>
             <WhoAreWe/>
             <SocialMedia/>
             </>
         ); 
    }
    
}
export default AboutUs ;  
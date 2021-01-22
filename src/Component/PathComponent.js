import react,{ Component } from "react"

class PathCard extends Component{
    constructor(props){
        super(props);
      
    }
    render(){
        return(
            <div className="PathCard">
              <div className="CardIcon">
                  <img src={this.props.icon}></img>
              </div>
              <div className="CardTitle">
                  {this.props.Title}
              </div>
              <div className="CardText">
                  {this.props.Text}
              </div>

            </div>
        );
    }
   
}

export default PathCard ; 
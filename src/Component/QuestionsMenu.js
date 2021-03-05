import react , {Component} from 'react'
import {Row } from 'reactstrap'

class QuestionsMenu extends Component{
  render(){
      return(
          <> 
          <div className="categories pt-3">
          <div className="form-group align-middle "> <input className="form-control search-form" placeholder="search" ></input></div>
          <Row >
              <div className="col-4 font-weight-bold ask_text" >All Questions</div>
              <div className="col-4"></div>
              <div className="col-4" > <button className="btn btn-light ask_btn">Ask Your Question</button> </div>
          </Row>
         <div class="btn-group fields" role="group" aria-label="Basic example">
 <button type="button" class="btn btn-secondary">RECENT QUESTIONS</button>
 <button type="button" class="btn btn-secondary">MATH</button>
 <button type="button" class="btn btn-secondary">SCIENCE</button>
 <button type="button" class="btn btn-secondary">PHISICS</button>
 <button type="button" class="btn btn-secondary"> .... </button>
</div>
          </div>
  
          </>
      );

  }
}

export default QuestionsMenu ; 
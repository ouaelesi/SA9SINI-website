import react , {Component} from 'react'


class LoginForm extends Component{
    render(){
        return(
            <>
            <div className="page_container">
            <div className="login_container">
                  <div className="login_with_google">
                   Login with Google
                  </div>
                  <div className="login_with_facebook">
                  Login with Facebook
                  </div>
                  <div className="login_form">
                  <div className="form-group">
                  User Name 
                  <input className="form-control" placeholder=".."></input>   
                  Email
                  <input className="form-control" placeholder=".."></input> 
                  Password
                  <input className="form-control" placeholder=".."></input>  
                  <button className="btn singinbtn">SIGN IN</button>
                  </div> 
                  </div>
              </div>

            </div>
             
            </>
        );
    }
}

export default LoginForm ; 
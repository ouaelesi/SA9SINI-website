import react , {Component} from 'react'


class LoginForm extends Component{
    render(){
        return(
            <>
            <div className="page_container">
            <div className="login_container">
                  <button className=" btn login_with_google">
                   <img src="/assets/imgs/google_logo.png"></img> Login with Google
                  </button>
                  
                  <button className=" btn login_with_facebook">
                    <img src="/assets/imgs/fb_logo.png" width="10px"></img>  Login with Facebook
                  </button>
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
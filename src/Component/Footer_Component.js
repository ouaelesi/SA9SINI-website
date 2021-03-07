import react, {Component} from 'react'


class Footer_ extends Component{
    render(){
        return(
           <div>
               <div className="footer2">
                 <div className=" footer_row2">
                 {/* <div className="footer_row2">
                 <div className="">  <img src='/assets/imgs/IWD_LOGO.png' className='footerlogo2'/></div>
                 </div> */}
                 <div className=""><p className="footer_nav"> FOLLOW US ON MEDIA</p></div>   
                 </div>
                 <div className=" footer_row2">
                     <div className="">
                     <div className="socialmedia2">
                    
                             <img src="/assets/imgs/fb_icon.png"></img>
                             <img src="/assets/imgs/twitter_icon.png"></img>
                             <img src="/assets/imgs/insta_icon.png"></img>
                        
                     </div>
                     </div>
                     <div className="col-4"></div>
                 </div>
                 <div className="footer_row2">
                 <div className=""><p className="footer_nav"> ©️ GDG ALGIERS 2021</p></div>   
                 </div>
           
             </div>
           </div>
        );
    }
}
export default Footer_; 
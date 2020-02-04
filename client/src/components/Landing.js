import React, {Component} from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
       number:{
           value: 150,
           density: {
               enable:true,
               value_area: 800
           }
       }
    }
}

class  Landing extends Component{
    render(){
    return(
      <div>
      <div className="container class-nav-fnt2 page-container2" style={{ textAlign: 'center'}}>
            <h1 style={{marginBottom:50 }}>
             Welcome To VT Emaily !
            </h1>
           <h4 style={{ marginTop:50, marginBottom:50 }}> 
           <i className="small material-icons">keyboard_arrow_right</i>Collect feedback form your users</h4>
           <h4 style={{ marginTop:50, marginBottom:50 }}>
           <i className="small material-icons">keyboard_arrow_right</i>Easy to use  user interface</h4>
           <h4 style={{ marginTop:50, marginBottom:50 }}>
           <i className="small material-icons">keyboard_arrow_right</i>Sing up now free</h4>
           
      
        </div>

          <Particles 
              params={particleOpt}
            />
           
      </div>
      
       
    )
 }
}

export default Landing;
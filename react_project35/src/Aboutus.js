import React from 'react'
import Nav from './Nav'
import "./components/CSS/Aboutus.css"
import image from "./components/images/Aboutus.PNG"
import {connect} from "react-redux";


 function Aboutus({loginUser}) {
    return (
            <div className="cont">
                <Nav user={loginUser}/>
                <div className="row">
                    <div className="column1" >
                        <h2>About Us</h2>
                        <center><img src={image}/></center>
                    </div>
                    <div className="column2" >
                        <div className="team">
                            <table>
                                <i class="yellow circle icon huge"></i><span>Aditya Kotikalapudi </span><span id="project">Project Lead</span>
                                <br />
                                <i class="orange circle icon huge"></i><span>Madesh Medasani </span><span id="project">Team member</span>
                                <br />
                                <i class="pink circle icon huge"></i><span>Uppala Nishita </span><span id="project">Team member</span>
                                <br />
                                <i class="violet circle icon huge"></i><span>K.V.S.Varshini </span><span id="project">Team member</span>
                                <br />
                                <i class="blue circle icon huge"></i><span>Biswas Lilly Kumari </span><span id="project">Team member</span>
                                <br />
                            </table>
                        </div>

                    </div>
                </div>
            </div>
    )
}

const mapStateToProps =(state)=>{
  
    return {
        
        loginUser: state.userReducer.username
        
    }
  }

  export default connect(mapStateToProps)(Aboutus);


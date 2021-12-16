import {useState} from 'react'
import axios from 'axios'
import {connect} from "react-redux";
import {useNavigate} from 'react-router-dom';

function ProfileForm({loginUser}){
    const [firstName, processFirstName] = useState("");
    const [lastName, processLastName] = useState("");
    const [houseNo, processHouseNo] = useState("");
    const [city, processCity] = useState("");
    const [address , processAddress] = useState("");
    const [multipleadd,processMultipleadd]= useState({
        listadd: []
    })

    const navigate = useNavigate()

    const save = () => {
        var addressInfo = {
            "username" : loginUser,
            "firstname" : firstName,
            "lastname" : lastName,
            "H.no" : houseNo,
            "city" : city,
            "address" : address
        }

        axios.post("http://localhost:5000/profile", addressInfo)

        navigate('/profile')

    }

    return(
        <div>
            
            <center><h1>Please enter your personal details and delivery address</h1></center>
            <form className="ui form">
                <div  className="field">
                    <label>First name</label>
                    <input type="text" name="firstname" placeholder="Firstname" onChange= {(obj) => processFirstName(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>Last name</label>
                    <input type="text" name="lastname" placeholder="Lastname" onChange= {(obj) => processLastName(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>House no</label>
                    <input type="text" name="houseNo" placeholder="HouseNo" onChange= {(obj) => processHouseNo(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>Location</label>
                    <input type="text" name="city" placeholder="Location" onChange= {(obj) => processCity(obj.target.value)} />
                </div>


                <div  className="field">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Address" onChange= {(obj) => processAddress(obj.target.value)} />
                </div>

            
                <input onClick={save} className="ui button" type="button" value="Submit" />
            </form> 

            
        </div>
        
    );
    
}

const mapStateToProps = (state) => {
    return {
        loginUser : state.userReducer.username
    }
}



export default connect(mapStateToProps)(ProfileForm);
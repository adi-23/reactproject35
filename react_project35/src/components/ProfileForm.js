import {useState} from 'react'
import axios from 'axios'

function Profile(){

    const [address , processAddress] = useState("");
    
    const save = () => {
        var addressInfo = {
            "address" : address
        }

        axios.post("http://localhost:5000/profile", addressInfo)
        
        console.log(address)
    }

    return(
        <div>
            <form className="ui form">
            <div  className="field">
                <label>Add Address</label>
                <input type="text" name="address" placeholder="Address" onChange= {(obj) => processAddress(obj.target.value)} />
            </div>
            
            <button onClick={save} className="ui button" type="submit">Submit</button>
            </form> 
        </div>
        
    );
    
}



export default Profile;
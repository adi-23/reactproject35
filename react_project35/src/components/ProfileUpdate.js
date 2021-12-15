import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

function ProfileUpdate({loginUser}){
    const [profile, setProfile] = useState({profiles : []})

    

    

    const fetchData = () =>{
        return fetch("http://localhost:5000/profile")
            .then((response) => response.json())
            .then((data)=> {
                setProfile({profiles : data
                })
            });
    }

    useEffect(()=>{
        fetchData()
    },[])


    const {profiles} = profile;

    let userProfile = {}

    for(let user of profiles){
        if(user.username === loginUser){
            userProfile = user;
            break;
        }
    }

    console.log(userProfile.id)

    const [firstName, processFirstName] = useState(userProfile.firstname);
    const [lastName, processLastName] = useState(userProfile.lastname);
    const [houseNo, processHouseNo] = useState(userProfile["H.no"]);
    const [city, processCity] = useState(userProfile.city);
    const [address , processAddress] = useState(userProfile.address);

    const [data, setData] = useState(userProfile)

    const [n,setn] = useState(0);

    console.log(firstName +" " + lastName + " " + userProfile.firstname + String(data["address"]) + " " +n)


    const update = () =>{

        const url = "http://localhost:5000/profile/" + userProfile.id
        console.log(userProfile.id)

        var userData = {
            "username": loginUser,
            "firstname": firstName,
            "lastname": lastName,
            "H.no": houseNo,
            "city": city,
            "address": address,
        } 

        axios.put(url, userData).then(response =>{
            console.log(response.data)
        }).catch(error =>{
            console.log(error.msg)
        })
    }

    return (
        <div>
            {firstName}
            <form className="ui form">
                <div  className="field">
                    <label>First name</label>
                    <input type="text" name="firstname" value={firstName} placeholder="Firstname" onChange= {(obj) => processFirstName(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>Last name</label>
                    <input type="text" name="lastname" value={lastName} placeholder="Lastname" onChange= {(obj) => processLastName(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>House no</label>
                    <input type="text" name="houseNo" value={houseNo} placeholder="HouseNo" onChange= {(obj) => processHouseNo(obj.target.value)} />
                </div>

                <div  className="field">
                    <label>Location</label>
                    <input type="text" name="city" value={city} placeholder="Location" onChange= {(obj) => processCity(obj.target.value)} />
                </div>


                <div  className="field">
                    <label>Address</label>
                    <input type="text" name="address" value={address} placeholder="Address" onChange= {(obj) => processAddress(obj.target.value)} />
                </div>

            
                <input type="button" onClick={update} className="ui button" value="submit" />
            </form> 

            
        </div>

    );

}

const mapStateToProps = (state) =>{
    return {loginUser: state.userReducer.username}
}



export default connect(mapStateToProps)(ProfileUpdate)
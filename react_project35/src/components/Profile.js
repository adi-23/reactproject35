import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";


function Profile({loginUser}){
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

    let flag = false;

    for(let user of profiles){
        if(user.username === loginUser){
            userProfile = user;
            flag = true;
            break;
        }
    }

    const html = <center>
        <div className="userIcon">
        <Icon name="user circle" size="huge" />
        </div>

        <table>
            <h3>Firstname :<span>{userProfile.firstname}</span></h3>
            
            <h3>Lastname :<span>{userProfile.lastname}</span></h3>
            <h3>House no :<span>{userProfile["H.no"]}</span></h3>
            <h3>Address :<span>{userProfile.address}</span></h3>
            <h3>City :<span>{userProfile.city}</span></h3>
        </table>
        {/* <Link to= {`/profileupdate`}><button>Update</button></Link> */}
    </center>;

    const check = (flag) ? html : <center><h1>No info about this user</h1></center>

    return(
        <div>
            
        {check}

        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        loginUser : state.userReducer.username
    }
}

export default connect(mapStateToProps)(Profile);
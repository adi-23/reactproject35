let userState = {
    username: "" 
}


const userReducer = (state=userState,action)=>{
    switch (action.type) {
        case "loginUser":
            console.log(action.payload.username)
            return {
                ...state,
                username: action.payload.username

            }
        default: return state

            
    }

}

export default userReducer;
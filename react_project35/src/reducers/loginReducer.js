
let initialState = {
    loginSuccess:false
}


const loginReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'loginSuccessful':
            return {
                ...state,
                loginSuccess:true

            }
        case 'loginFailure':
            return {
                ...state,
                loginSuccess:false
            }
        default: return state

            
    }

}

export default loginReducer;
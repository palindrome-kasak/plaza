const initialState = {
    user : null,
    loggedIn : false,
    loading : false
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
};

export default userReducer; 


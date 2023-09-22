const initialState = {
    user:{}
}

const reducer = (state=initialState,action)=>{
    switch(action.Type){
        case ADD:
            return{
                {...state,user:action.payload}
        }
    }
}
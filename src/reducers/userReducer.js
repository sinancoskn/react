import {
    
} from '../contants/actionTypes';

const initialState = {
    token:null,
    notification:[
        {user:"Nur Coskun",message:"Merhaba Sinan"},
        {user:"Sude Coskun",message:"Merhaba bu benim sana ilk mesajım"}
    ]
};

function userReducer(state = initialState,action){
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer;
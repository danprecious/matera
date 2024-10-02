export const reducer = (state, action) =>{
    if (action.type == "toggleNav") {
        return {
            ...state,
            navOpen : action.payload
        }
    }
    if(action.type === "UPLOAD_MODAL"){
        return {
            ...state, 
            uploadModal: action.payload
        }
    }
}
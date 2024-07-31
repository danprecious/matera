export const reducer = (state, action) =>{
    if (action.type == "toggleNav") {
        return {
            ...state,
            navOpen : action.payload
        }
    }
}
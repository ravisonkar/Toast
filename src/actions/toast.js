export const showToastWithDefaultMessage = () => dispatch => {
    dispatch({
        type: "showToastWithDefaultMessage",
    })
}



export const showToastWithInputMessage = (input_text) => dispatch => {
    dispatch({ 
        type: "showToastWithInputMessage",
        payload:input_text 
    })
}
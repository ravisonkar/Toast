import { toast } from 'react-toastify';

const initialState = ""
export const showToast = (state = initialState, action) => {
  if (action.type == "showToastWithDefaultMessage") {
    toast("component1", {
      closeOnClick: true,
      autoClose: true,
      closeButton: true,
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: true
    });
  }
  if (action.type == "showToastWithInputMessage") {
    toast(action.payload, {
      closeOnClick: true,
      autoClose: true,
      closeButton: true,
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: true
    });
  }
  return state;

}
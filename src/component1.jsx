import React from "react";
import './App.css';
import {showToastWithDefaultMessage} from './actions/toast'
import store from './store/index'
function Component1() {

  function showToast()  {
    store.dispatch(showToastWithDefaultMessage())
  }
  return (
    <div>
      <div class="toast_block">
        <button class="show_toast_button" onClick={()=>showToast()}>Show Toast</button>
      </div> 
       </div>
  );
}

export default Component1;
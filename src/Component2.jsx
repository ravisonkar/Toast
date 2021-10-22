import React from "react";
import './App.css';
import store from './store/index'
import {showToastWithInputMessage} from './actions/toast'
class Component2 extends React.Component {
  constructor() {
    super()
    this.state = {
      input_text: "",
    }
  }

  changeTextOnInput = (event) => {
    this.setState({
      input_text: event.target.value,
      error_msg: false
    })
  }

  submitToastMessage = () => {
    if (this.state.input_text != "") {
      store.dispatch(showToastWithInputMessage(this.state.input_text))
      this.setState({
        input_text: ""
      })
    } else {
      this.setState({
        error_msg: true
      })
    }
  }

  render() {
    return (
      <div className="toast_block">
        <input className="input_box" value={this.state.input_text} onChange={this.changeTextOnInput}></input>
        <button className="submit_toast_button" onClick={() => this.submitToastMessage()}>Submit</button>
        {this.state.error_msg ? <div className="error_msg">Input cannot be left blank</div> : ""}
      </div>
    );
  }
}

export default Component2;

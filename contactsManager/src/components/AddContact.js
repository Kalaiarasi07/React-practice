import { render } from "@testing-library/react";
import React, {useState} from "react";

class AddContact extends React.Component
{
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email===""){
      alert("All fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});
    console.log(this.state);
  };
  render(){
    return(
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            value={this.state.name}
            onChange={ (e) => this.setState({name: e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            value={this.state.email}
            onChange={ (e) => this.setState({email: e.target.value})}/>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  
  }
}

export default AddContact;
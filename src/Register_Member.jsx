import React, { useState,Fragment, Component } from 'react';
import Registration_Form from "./Registration_Form";
import Navbar from './Navbar';
class Register_Member extends Component {
  state = {
    SelectedOption: ''
  };
  render(){
    return (
        <>             
            <div className="container-fluid" 
                style={{backgroundColor:""}}> 
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                    <div id="background"className="">
                        <div id = "foreground" 
                        className="col-md-10">
                            <div className="col-12 mb-lg-3" 
                            style={{ height:'15%',backgroundColor:"skyblue" }}>
                                <h1 className="text-center"
                                style={{padding:"50px", color:"white"}}>
                                    Registration Form
                                </h1>
                            </div>
                                <form className="col-10 mx-auto ">
                                    <section className="">
                                        {this.renderSelector()}
                                        <div className="">
                                            {this.renderSelected(this.state.SelectedOption)}
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
   }
    renderSelector() {
        return (
          <div className="form-group mt-5">
            <label 
                className="form-label">
                    Select the person you want to register
            </label>
            <select className="form-control"
              onChange={(e) => this.setState({ SelectedOption: e.target.value })}
              style={{color:"GrayText"}}>
                <option selected disabled="disabled" value="1" hidden="hidden">-- Select the person --</option>
                <option value="2">Doctor</option>
                <option value="3">Health-Worker</option>
                <option value="4">Researcher</option> 
            </select>
          </div>
        );
    }
      renderSelected(SelectedOption) {
        // if (!SelectedOption)
        // return 
         if(SelectedOption==="2")
            return <Registration_Form Hospital="Hospital"/>;
            
        else if(SelectedOption==="3")
        return <Registration_Form Hospital="Disensary"/>;
        else if(SelectedOption==="4")
            return <Registration_Form />;
      }
};
export default Register_Member;   
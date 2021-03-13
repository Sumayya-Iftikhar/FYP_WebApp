import React,{useState} from "react";
import Navbar from "./Navbar";
import { Component } from "react";
import profile from "./images/profile.png";
    export default class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"sumayya khan",
            cnic:"1234512345671",
            Cno:"03001234567",
            City:"Rawalpindi",
            email:"sumayya@gmail.com",
            dob:"12/06/1897",
            img: profile,
            username:"sumayya1231",
            addModalShow :false,
            address:"rawalpindi"

        };
    }
    render(){
        let addModalClose=()=>this.setState({addModalShow:false});
    return(
        <>    
            <div className="container-fluid" 
            style={{backgroundColor:"white"}}> 
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                    <div className="col-10 mx-auto mb-lg-2 mt-5" 
                    style={{ height:'15%',backgroundColor:"skyblue" }}>
                        <h1 className="text-center"
                        style={{padding:"10px", color:"white"}}>
                        Profile
                        </h1>
                    </div>
                    <section className="d-flex align-items-center pt-4 mt-3 mb-1">
                        <div className="container-fluid nav_bg">
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-5 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center">
                                            <img className="img-flud" src={this.state.img} alt="" style={{height:"80%", width:"80%", borderRadius:"50%"}}/>
                                        </div>
                                        <div className="col-md-7 pt-5 pt-lg-0 order-1 order-lg-2">
                                            <div className="d-flex flex-md-row flex-column col-md-6">
                                                <h3 for="Fname" 
                                                className="col-6">
                                                    Name
                                                </h3>
                                                <input className="profile"
                                                name="Fname"
                                                id ="Fname"
                                                value={this.state.name}
                                                readOnly/>
                                            </div>                       
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                                <h3 for="Uname" 
                                                className="col-6">
                                                    Username
                                                </h3>
                                                <input className="profile" 
                                                name="uname"
                                                id ="uname"
                                                value={this.state.username}
                                                readOnly
                                                />                                
                                            </div> 
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                                <h3 for="dob" 
                                                className="col-6">
                                                    Date of Birth
                                                </h3>
                                                <input className="profile" 
                                                name="dob"
                                                id ="dob"
                                                value={this.state.dob}
                                                />                                
                                            </div>                                
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                                <h3 for="Email" 
                                                className="col-6">
                                                    Email 
                                                </h3>
                                                <input className="profile"
                                                name="email"
                                                id ="email"
                                                value={this.state.email}
                                                readOnly/>
                                            </div>                                
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                                <h3 for="Cnic" 
                                                className="col-6">
                                                    CNIC
                                                </h3>
                                                <input className="profile"
                                                name="cnic"
                                                id ="cnic"
                                                value={this.state.cnic}
                                                readOnly/>                                    
                                            </div>                                
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">                                
                                                <h3 for="City" 
                                                className="col-6">
                                                    City
                                                </h3>
                                                <input className="profile"
                                                name="City"
                                                id ="City"
                                                value={this.state.City}
                                                readOnly/>
                                            </div>                                
                                            <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                            <h3 for="address" 
                                                className="col-6">
                                                    Address
                                                </h3>
                                                <input className="profile"
                                                name="address"
                                                id ="address"
                                                value={this.state.address}
                                                readOnly/>
                                                </div>
                                                <div className="d-flex d-flex flex-md-row flex-column col-md-6 mt-1">
                                                <h3 for="Cno" 
                                                className="col-6">
                                                    Contact No.
                                                </h3>
                                                <input className="profile"
                                                name="Cno"
                                                id ="Cno"
                                                value={this.state.Cno}
                                                readOnly/>
                                            </div>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                    <div class="d-grid d-md-flex justify-content-md-end">
                        <UpdateProfile 
                            show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </div>
                </div>
            </div>
    
    </>
    )
}};
const UpdateProfile = (props) => {
    const[data , setData ] =useState({
        email:"sumayya@gmail.com",
        last_name:"khan",
        cnic:"1234512345671",
        Cno:"03001234567",
        password:"sami123",
        Cpassword:"",
        img:"",
    });
    const InputEvent= (event) =>{
        const { name , value} = event.target;
        setData((preVal)=>{
            
        if(value.password===value.ConfirmPassword){
        return{
            ...preVal,
            [name] : value,
        };}
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert('Ho gya Update :)');
    };
    return(
        <>
            <button type="button" className="btn btn-primary btn-lg text-light btn-hover hover-text-light me-md-5 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update
            </button>
            <div className="modal fade pt-3" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Profile</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body "> 
                            <form>
                                <label className="Uprofile col-6 mt-3 "> Change Profile Picture</label>
                                <img type="img" className="updateField" src={data.img} alt="choose file" type="img"/>
                                <br/>
                                <label className="Uprofile col-6 mt-3"> Contact no</label>
                                <input className="updateField"type="text" id="Cno" name="Cno" value={data.Cno} onChange={InputEvent} patterrn="^(0)((3[0-6][0-9]))(\d{7})$"/>
                                <br/>
                                <label className="Uprofile col-6 mt-3"> Email</label>
                                <input className="updateField"type="email" id="email" name="email" value={data.email} onChange={InputEvent} pattern="[a-zA-Z0-9.!# $ % &'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"/>
                                <br/>
                                <label className="Uprofile col-6 mt-3"> Passsword</label>
                                <input className="updateField" type="password" id="password" name="password"  onChange={InputEvent} placeholder="Enter New Password"/>
                                <br/>
                                <label className="Uprofile col-6 mt-3"> Confirm Passsword</label>
                                <input className="updateField"type="password" id="ConfirmPassword" name="Confirmpassword" onChange={InputEvent} placeholder="Re-enter your Password"/>
                                <br/>
                                <label className="Uprofile col-6 mt-1"> Enter Passsword to confirm changes</label>
                                <input className="updateField" type="password" id="CPassword" name="Cpassword"  placeholder="Enter Current Password"/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" onClick={formSubmit}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
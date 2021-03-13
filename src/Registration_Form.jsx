import React,{ useState} from 'react';
import DropDown from "./DropDown";
import Buttons from "./Buttons";
const Registration_Form=(props)=>{
    const[Selection, setSelection] =useState("");
    const [Registration , setRegistration] = useState({
        fname:"",
        lname:"",
        uname:"",
        email:"",
        city:"",
        cnic:"",
        Cno:"",
        hospital:"",
    });
    const handleInput =(event) => {
        console.log(event.target.value);
    };
    // const onSubmits=(event) =>{
    //     event.preventDefault();
    //     alert("submitted");
    // };
    return(
        <>
        <div className="my-5">
<form>
<div className="d-flex flex-md-row flex-column my-md-4 gy-lg-5">
    <div className="col-md-6 me-5">
        <label for="Fname" 
        className="form-label">
            Full Name
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="Enter Name"
        pattern="[a-zA-Z ]{2,40}" 
        name="name"
        id ="name"
        onChange={handleInput}
        required/>
    </div>
    <div className="col-md-5 ">
    <label for="Uname" 
        className="form-label">
            Username
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="Enter Username" 
        pattern="[a-zA-Z0-9]+([a-zA-Z0-9](_|-|)"
        name="uname"
        id ="uname"
        onChange={handleInput}
        required/>
    </div>                     
</div>       
<div className="d-flex flex-md-row flex-column my-md-4 gy-lg-5">
    <div className="col-md-6 me-5">
        <label for="Uname" 
        className="form-label">
            Date-of-birth
        </label>
        <input type="date" 
        className="form-control"  
        pattern="[a-zA-Z0-9]+([a-zA-Z0-9](_|-|)"
        name="dob"
        id ="dob"
        required/>
    </div>
    <div className="col-md-5">
        <label for="Fname" 
        className="form-label">
            Email Address
        </label>
        <input type="text" 
        className="form-control" 
        pattern="[a-zA-Z0-9.!# $ % &'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        name="email"
        id ="email"
        placeholder="Enter Email"
        // value={Registration.email}
        onChange={handleInput}
        required/>
    </div>                            
</div>       
<div className="d-flex flex-md-row flex-column my-md-4 gy-lg-5">
    <div className="col-md-6 me-5">
        <label for="Gender" 
        className="form-label"> 
            Gender 
        </label>
        <select className="form-select" 
        aria-label="" 
        style={{color:"GrayText"}}>                     
            <option selected disabled="disabled" 
            value="1" 
            hidden="hidden">
                -- Specify gender --
            </option>
            <option value="2">
                Male
            </option>
            <option value="3">
                Female
            </option>
        </select>
    </div>
    <div className="col-md-5 me-5">
        <label for="Cnic" 
        className="form-label">
            CNIC
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="12345-1234567-1" 
        pattern="^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"
        name="cnic"
        id ="cnic"
        // value={Registration.cnic}
        onChange={handleInput}
        required />
    </div>
</div>
<div className="d-flex flex-md-row flex-column my-md-4 gy-lg-5">
    <div className="col-md-6 me-5">
        <label for="City" 
        className="form-label">
            City
        </label>
        <DropDown required/>
    </div>
    <div className="col-md-5">
        <label for="address" 
        className="form-label">
            Address
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="Enter Address" 
        patterrn="^(0)((3[0-6][0-9]))(\d{7})$"
        name="address"
        id ="address"
        // value={Registration.address}
        onChange={handleInput}
        required />
    </div>
</div>       
<div className="d-flex flex-md-row flex-column my-md-4 gy-lg-5">
    <div className="col-md-6 me-5">
        <label for="Hospiatl" 
        className="form-label">
            {props.Hospital}
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="Enter" 
        name="hospital"
        id ="hospital"
        // value={Registration.hospital}
        onChange={handleInput}
        required />
    </div>
    <div className="col-md-5">
        <label for="Cno" 
        className="form-label">
            Contact Number
        </label>
        <input type="text" 
        className="form-control" 
        placeholder="0300-1234567" 
        patterrn="^(0)((3[0-6][0-9]))(\d{7})$"
        name="Cno"
        id ="Cno"
        // value={Registration.Cno}
        onChange={handleInput}
        required />
    </div>
</div>

<div className="d-flex flex-md-row flex-column" style={{marginLeft:"60%"}}>
    <Buttons name="Register" id="Register" type="submit" navigate="/Register_Member/"/>
    <Buttons name="Cancel" id="Cancel" type="submit"navigate="/Register_Member/"/>
</div>
</form>
</div>
</>
    );}

    export default Registration_Form;
import React, { useState } from 'react';
import Buttons from './Buttons';
import DropDown from './DropDown';
const Hospital_RegistrationForm = () =>{
    const [Registration , setRegistration] = useState({
        name:"",
        city:"",
        address:"",
    });
    const handleInput =() => {
    }
      return(
        <>        
            <div className="my-5">
                            <form>
                            <div className="d-flex flex-column my-5">
                                <div className="col-md-12 my-3">
                                    <label for="name" 
                                    className="form-label">
                                        Name
                                    </label>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Enter Name"
                                    name="name"
                                    id ="name"
                                    value={Registration.name}
                                    onChange={handleInput}
                                    required/>
                                </div>       
                                <div className="col-md-12 my-3">
                                    <label for="City" 
                                    className="form-label">
                                        City
                                    </label>
                                    <DropDown required/>
                                </div>
                                <div className="col-12 my-3">
                                    <label for="Fname" 
                                    className="form-label">
                                        Address
                                    </label>
                                    <input type="text" 
                                    className="form-control" 
                                    name="address"
                                    id ="address"
                                    placeholder="Enter address"
                                    value={Registration.address}
                                    onChange={handleInput}
                                    required/>
                                </div>   
                            </div>
                            <div className="d-flex flex-md-row flex-column" style={{marginLeft:"60%"}}>
                                <Buttons name="Register" id="Register" type="submit"navigate="/Add_Hospital/"/>
                                <Buttons name="Cancel" id="Cancel" type="submit"navigate="/Add_Hospital/"/>
                            </div>
                        </form>
                    </div>
        </>
    );
}
export default Hospital_RegistrationForm;   
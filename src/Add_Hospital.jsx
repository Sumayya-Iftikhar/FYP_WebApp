import React, { Component } from 'react';
import Hospital_RegistrationForm from './Hospital_RegistrationForm';
import Navbar from './Navbar';
class Add_Hospital extends Component {
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
                    Select what you want to register
            </label>
            <select className="form-control"
              onChange={(e) => this.setState({ SelectedOption: e.target.value })}
              style={{color:"GrayText"}}>
                <option selected disabled="disabled" value="1" hidden="hidden">-- Select --</option>
                <option value="2">Hospital</option>
                <option value="3">Dispensary</option>
            </select>
          </div>
        );
    }
      renderSelected(SelectedOption) {
        if (!SelectedOption)
        return <h1 text="Select an option" />;
        else if(SelectedOption==="2")
            return <Hospital_RegistrationForm />;
            
        else if(SelectedOption==="3")
        return <Hospital_RegistrationForm />;
      }
};
export default Add_Hospital;   












// import React from 'react';
// import Navbar from './Navbar';
// import Hospital_RegistrationForm from './Hospital_RegistrationForm';

// const Add_Hospital = () =>{
//     return(
//         <>
//             <div className="container-fluid" 
//             style={{backgroundColor:""}}> 
//                 <div className="row">
//                     <div className="col-12">
//                         <Navbar/>
//                     </div>
//                     <div id="background"className="">
//                         <div id = "foreground" 
//                         className="col-md-10">
//                             <div className="col-12 mb-lg-3" 
//                             style={{ height:'15%',backgroundColor:"skyblue" }}>
//                                 <h1 className="text-center"
//                                 style={{padding:"50px", color:"white"}}>
//                                 Registration Form
//                                 </h1>
//                             </div>
//                             <Hospital_RegistrationForm/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Add_Hospital;
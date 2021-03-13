import React from 'react';
import Buttons from './Buttons'; 
const Home = () => {
    return(
        <>
            <div id="main_header" 
            className="container-fluid">   
                <div id = "header" 
                className="col-md-10">
                    <div className="row tab-center"
                    style ={{padding:"10%"}}>
                        <h2>FrameWork For Dengue Surveillence and Data Collection In Pakistan</h2>
                        <h4 className="my-2" >
                        (saving valuable lives and shielding Pakistan from dengue Virus)
                        </h4>      
                    </div>            
                    <div className="d-flex align-items-center flex-md-row flex-column">
                        <Buttons name="Admin Login" 
                        id="Admin-Login" 
                        type="button"
                        navigate="/Login/"/>
                        <Buttons name="Doctor Login" 
                        id="Doctor_Login" 
                        type="button"
                        navigate="/Login/"/>
                        <Buttons name="Researcher Login" 
                        id="Researcher_Login" 
                        type="button"
                        navigate="/Login/"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
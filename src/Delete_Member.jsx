import React from 'react';
import Navbar from './Navbar';
import Deletion_Form from './Deletion_Form';

const Delete_Member = () =>{
    return(
        <>
            <div className="container-fluid"> 
                <div className="row" >
                    <div className="col-12">
                        <Navbar/>
                    </div>
                    <div id="background"className="" style={{height:"90vh"}} >
                        <div id = "foreground" 
                        className="col-md-10">
                            <div className="col-12 mb-lg-3" 
                            style={{ height:'15%',backgroundColor:"skyblue" }}>
                                <h1 className="text-center"
                                style={{padding:"10px", color:"white"}}>
                                Deletion Form
                                </h1>
                            </div>
                            <Deletion_Form/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Delete_Member;
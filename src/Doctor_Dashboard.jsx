import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import CardData from "./CardData";
const Doctor_Dashboard =() =>{
    return(
        <>
            <div className="container-fluid" > 
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                    <div className="my-5">
                    </div>
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-5">
                                    {CardData.map((val, ind) =>{
                                    return <Card key={ind} imgsrc ={val.imgsrc} 
                                    title={val.title}
                                    navigate={val.navigate}/>})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Doctor_Dashboard;
import React from 'react';
import {NavLink} from 'react-router-dom';
const Card =(props) => {
    return(
        <>
            <div className="col-md-4 col-9 mx-auto">
                <div class="card text-center" 
                style={{backgroundColor:"skyblue" ,color:"blue", borderRadius:"10px", borderColor:"skyblue"}}>
                    <img src={props.imgsrc} 
                    className="card-img-top" alt={props.imgsrc}
                    style={{height:"170px"}}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                            {props.title}
                        </h5>
                        <NavLink to={props.navigate} 
                        className="btn btn-outline-info text-light" >
                            Records
                        </NavLink>
                    </div>
                </div>
            </div>              
        </>
    );
};  
export default Card;
import React from 'react';
import Loginform from './Loginform';
const Login = () => {
    return(
        <>
            <div className="parent ">
                <div className="child order-2 order-lg-1 text-center">
                    <h1 style={{marginTop:"25%"}}>FrameWork For Dengue Surveillence and Data Collection In Pakistan</h1>                              
                </div>
                <div className="child order-1 order-lg-2">
                    <Loginform/>
                </div>
            </div>
        </>
    );
}
export default Login;
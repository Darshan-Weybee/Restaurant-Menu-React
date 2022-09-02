import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="header-title">
                <div className="header-title-food">
                    <span className="header-title-f">F</span><span>ood</span>
                </div>
                <div className="header-login">
                    <span>Login</span>
                    <span>Sign Up</span>
                </div>
            </div>
            <div className="header-desc">
                <div className="header-desc-title">Provide the best food for you</div>
                <div className="header-desc-desc">We provide the best and most delicious food based on high quality ingredients that are maintained by the high tech machines and cooked by our experts</div>
            </div>
        </div>
    )
}

export default Header
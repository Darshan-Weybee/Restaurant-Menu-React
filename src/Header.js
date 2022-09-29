import React from "react";

function Header(props){
    const {sliderComponent} = props;
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
                <div className="header-desc-title">Provide the <span className="header-desc-title-bf">best food</span> for you</div>
                <hr className="header-title-hr"/>
                <div className="header-desc-desc">We provide the best and most delicious food based on high quality ingredients that are maintained by the high tech machines and cooked by our experts</div>
            </div>
            <div className="header-slider">
                <div className="header-slider-inside-div" style={{opacity: "0.2"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img"  style={{transform: "scale(0.8)"}}/></div>
                
                <div className="header-slider-inside-div" style={{margin: " 0 0 0 1rem", opacity : "0.6"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(1)"}}/></div>
               
                <div className="header-slider-inside-div" style={{margin: " 0 2rem 0 2rem", opacity : "0.8"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132987/traditional-meat-empanadas-with-llajua-sauce-12-pack.f2adcfeb4ccf027675047f1367ce83ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(1.1)"}}/></div>
               
                <div className="header-slider-inside-div" style={{margin: " 0 2rem 0 2rem"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(1.5)"}}/></div>
               
                <div className="header-slider-inside-div" style={{margin: " 0 2rem 0 2rem", opacity : "0.8"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(1.1)"}}/></div>
               
                <div className="header-slider-inside-div" style={{margin: " 0 1rem 0 0", opacity : "0.6"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134704/gramercy-tavern-mushroom-lasagna-4-pack.88c671dec184d8bee908d6f5d8d860f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(1)"}}/></div>
               
                <div className="header-slider-inside-div" style={{opacity: "0.2"}}><img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104768/commanders-palace-three-course-shrimp-and-grits-dinner-for-2.984253533e589547e834420efccc174a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" alt="offer" className="header-slider-inside-div-img" style={{transform: "scale(0.8)"}}/></div>
            </div>
        </div>
    )
}

export default Header
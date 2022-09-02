import axios from "axios";
import React,{useEffect, useState} from "react";

function Burger(props){
    const {page, isGridView} = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://ig-food-menus.herokuapp.com/burgers`)
        .then(res => setData(res.data))
    },[]);

    const singleItem = {
        width : "100%"
    }

    const divComp = {
        display: "flex", 
        flexDirection : "row", 
        gap : "2rem"
    }

    const imgDiv = {
        width : "20%"
    }

    const pcDiv = {
        flexDirection : "column", 
        gap: "0.2rem"
    }

    const rate = {
        width : "5%"
    }

    return(
        <>
       {
        data.map(el => {
            return(
                <div className="mainContent-content-single-item" key={el.id} style={isGridView ? {} : singleItem}>
                    <div style={isGridView ? {} : divComp}>
                        <div style={isGridView ? {} : imgDiv}>
                            <img src={el.img} alt="dish"/>
                        </div>
                        <div>
                            <div className="mainContent-content-single-item-name">{el.name}</div>
                            <div className="mainContent-content-single-item-dsc">{el.dsc}</div>
                            <div className="mainContent-content-single-item-pc" style={isGridView ? {} : pcDiv}>
                                <div className="mainContent-content-single-item-location"><i className="fa-solid fa-location-dot"></i>{el.country}</div>
                                <div className="mainContent-content-single-item-price">${el.price}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mainContent-content-single-item-rate" style={isGridView ? {} : rate}>{el.rate}<i className="fa-sharp fa-solid fa-star"></i></div>
                </div>
            )
        })
        }
    </>
    )
}

export default Burger
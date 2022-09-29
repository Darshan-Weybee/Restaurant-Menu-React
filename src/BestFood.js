import axios from "axios";
import React, { useEffect, useState } from "react";

const temp = (data, sort, radio) => {
    if(sort === "Price : High to Low"){
        return filterData(data, radio).sort((a,b) => b.price - a.price)
    }
    else if(sort === "Price : Low to High"){
        return filterData(data, radio).sort((a,b) => a.price - b.price)
    }
    else if(sort === "Rate : High to Low"){
        return filterData(data, radio).sort((a,b) => b.rate - a.rate)
    }
    else if(sort === "Rate : Low to High"){
        return filterData(data, radio).sort((a,b) => a.rate - b.rate)
    }
    return data

}

const filterData = (data, radio) => {
    if(radio === "Under $100"){
        return data.filter(el => el.price <= 100)
    }
    else if(radio === "$50 to $100"){
        return data.filter(el => el.price >= 50 && el.price <= 100)
    }
    else if(radio === "Under $50"){
        return data.filter(el => el.price < 50)
    }
    else if(radio === "Above $100"){
        return data.filter(el => el.price > 100)
    }
    else if(radio === "default"){
        return data
    }
}


function BestFood(props) {
    const [data, setData] = useState([]);
    const { isGridView, radio, sort} = props;

    useEffect(() => {
        axios.get(`https://ig-food-menus.herokuapp.com/best-foods`)
            .then(res => setData(res.data))
    }, []);

    const singleItem = {
        width: "100%"
    }

    const divComp = {
        display: "flex",
        flexDirection: "row",
        gap: "2rem"
    }

    const imgDiv = {
        width: "20%"
    }

    const pcDiv = {
        flexDirection: "column",
        gap: "0.2rem"
    }

    const rate = {
        width: "5%"
    }

    return (
        <>
            {
                temp(data, sort, radio).map(el => {
                    return (
                        <div className="mainContent-content-single-item" key={el.id} style={isGridView ? {} : singleItem}>
                            <div style={isGridView ? {} : divComp}>
                                <div style={isGridView ? {} : imgDiv}>
                                    <img src={el.img} alt="dish" />
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

export default BestFood
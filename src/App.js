import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import BestFood from './BestFood';
import { useNavigate } from 'react-router-dom';
import Burger from './Burger';
import Bread from './Bread';
import Sandwiches from './Sandwiches';
import Drinks from './Drinks';
import Pizzas from './Pizzas';
import axios from 'axios';
import Header from './Header';

function App() {
  const [page, setPage] = useState({});
  const [isGridView, setIsGridView] = useState(true);
  const navigate = useNavigate();
  const [radio, setRadio] = useState("default");
  const [features, setFeatures] = useState(false);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    axios.get("https://ig-food-menus.herokuapp.com/pagination")
    .then(res => setPage(res.data))
  },[])
  return (
    <>
    <Header/>
    <div className="App">
      <div className='container'>
        <div className='sidebar'>
          <div className='popular'>
             <h1>Popular</h1>
             <hr/>
             <div className='sidebar-button-div'>
                <button className='sidebar-button' title="burgers" onClick={() =>navigate("/burger")}><img src='https://food-g-app.web.app/static/media/burger.e4646d9c.svg' alt='burger'/><span>Burger</span></button>
                <button className='sidebar-button'  title="breads" onClick={() =>navigate("/bread")}><img src='https://food-g-app.web.app/static/media/bread.3829698f.svg' alt='bread'/><span>Breads</span></button>
                <button className='sidebar-button'  title="sandwiches" onClick={() =>navigate("/sandwiches")}><img src='https://food-g-app.web.app/static/media/sandwich.2e9ee917.svg' alt='sandwiches'/><span>Sandwiches</span></button>
                <button className='sidebar-button'  title="drinks" onClick={() =>navigate("/drinks")}><img src='https://food-g-app.web.app/static/media/drinks.03dd034b.svg' alt='drinks'/><span>Drinks</span></button>
                <button className='sidebar-button'  title="pizzas" onClick={() =>navigate("/pizzas")}><img src='https://food-g-app.web.app/static/media/pizza.42d0ea1b.svg' alt='pizzas'/><span>Pizzas</span></button>
             </div>
          </div>
          <div className='price'>
             <h1>Price</h1>
             <hr/>
             <div className='sidebar-radio-div'>
                <div className='sidebar-radio'>
                  <input type="radio" name='radio' value="Under $100" onChange={() => setRadio("Under $100")}/>
                  <label>Under $100</label>
                </div>
                <div className='sidebar-radio'>
                  <input type="radio" name='radio' value="$50 to $100" onChange={() => setRadio("$50 to $100")}/>
                  <label>$50 to $100</label>
                </div>
                <div className='sidebar-radio'>
                  <input type="radio" name='radio' value="Under $50" onChange={() => setRadio("Under $50")}/>
                  <label>Under $50</label>
                </div>
                <div className='sidebar-radio'>
                  <input type="radio" name='radio' value="Above $100" onChange={() => setRadio("Above $100")}/>
                  <label>Above $100</label>
                </div>
             </div>
          </div>
          <div className='rate'>
             <h1>Rate</h1>
             <hr/>
          </div>
        </div>
        <div className='mainContent'>
          <div className='mainContent-header'>
            <input type="text" placeholder="Search product here..." className='search'/>
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            <div className='features' onClick={() => setFeatures(!features)}> Featured </div>
            <div className={`features-detail ${features ? "" : "hidden"}`} onClick={(e) =>  setSort(e.target.textContent)}>
              <div>Price : High to Low</div>
              <div>Price : Low to High</div>
              <div>Rate : High to Low</div>
              <div>Rate : Low to High</div>
            </div>
            <button className='list-view' onClick={() => setIsGridView(false)}>List</button>
            <button className='grid-view' onClick={() => setIsGridView(true)}>Grid</button>
          </div>
          <div className='mainContent-content' style={isGridView ? {} : {flexDirection: "column"}}>
              <Routes>
                <Route path='/' element={<BestFood page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
                <Route path='/burger' element={<Burger page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
                <Route path='/bread' element={<Bread page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
                <Route path='/sandwiches' element={<Sandwiches page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
                <Route path='/drinks' element={<Drinks page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
                <Route path='/pizzas' element={<Pizzas page = {page} isGridView = {isGridView} radio = {radio} sort = {sort}/>}/>
              </Routes>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

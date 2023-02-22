
import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes, 
    Route,
    Link
} from "react-router-dom";
import Tome from "./Home"
import about from "./HTML";


export default function App(){
    return (
        <Router>
                <div>
                    <ul div="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/index">HTML</Link></li>
                    </ul>
                <hr/>
    {

    }
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </div> 
</Router>
    );
}
// You can think of these components as "pages"
// in your app.
function Home(){
    Tome();
    return <h1>Home</h1>;
}
function About() {
    about();
    return <h1>HTML</h1>;
  }
  
App();

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import Home  from './components/Home';
import About from './components/About' ;
import Contact from './components/Contact' ;
import Navbar from './components/Navbar'
import SingPost from  './components/SingPost'


class App extends Component {
     
       render(){
         return(
            <BrowserRouter>
            <div>
             <Navbar/>
             <Switch>
             <Route exact path="/" component ={Home}/>
             <Route  path="/about" component ={About}/>
             <Route  path="/contact" component ={Contact}/>
             <Route  path="/:post_id" component ={SingPost}/>
             </Switch>
            </div>
            </BrowserRouter>
           
         );
       }
}

export default App;

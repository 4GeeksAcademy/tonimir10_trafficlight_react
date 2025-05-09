import React from "react";
import './protector.css'
import Protector from './Protector'
import Light from "./Light";
import './light.css'
import Button from "./Button";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
  <div className="trafficlight">
   <Protector/>
   <Protector/>
   <Protector/>
   <Light color='red'/>
  <Light color='yellow'/>
  <Light color='green'/>
  <Button/>
</div>

	);
};

export default Home;
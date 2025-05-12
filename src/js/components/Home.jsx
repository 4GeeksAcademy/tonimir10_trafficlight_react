import React, { useEffect, useState } from "react";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Light = ({ color, isActive }) => {
  return <div className={`${color} ${isActive ? 'active' : ''}`}></div>;
};

const Trafficlight = () => {
  const [selected, setSelected] = useState('red');
  const [active, setActive] = useState(false);
  useEffect(() => {
   if(active){
     const interval = setInterval(() => {
        
        if(selected == 'red'){
          setSelected('yellow');
        }
        if(selected == 'yellow'){
          setSelected('green');
        }
        if(selected == 'green'){
          setSelected('red');
        }
      },2000)
      return () => clearInterval(interval);
      }
    
  },[active, selected])
  
	return (
    <>
  <div className="trafficlight">
    <div className="p-box"></div>
    <div className="box-light">
      <Light color="red" isActive={selected === 'red'} />
        <Light color="yellow" isActive={selected === 'yellow'} />
        <Light color="green" isActive={selected === 'green'} />
    </div>
    <button className="btn btn-success boton" onClick={() => setActive(true)}>Activar</button>
    <button className="btn btn-danger boton2" onClick={() => setActive(false)}>Parar</button>
  </div>
  
</>
	);
};

export default Trafficlight;
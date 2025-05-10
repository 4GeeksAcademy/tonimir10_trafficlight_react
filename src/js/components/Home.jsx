import React, { useEffect, useState } from "react";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selected, setSelected] = useState('red');
  const [active, setActive] = useState(false);
  useEffect(() => {
   if(active){
      setInterval(() => {
        
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
      }
    
  },[active, selected])
  
	return (
    <>
  <div className="trafficlight">
    <div className="p-box"></div>
    <div className="box-light">
      <div className={`red ${selected == 'red' ? 'active' : ''}`}></div>
      <div className={`yellow ${selected == 'yellow' ? 'active' : ''}`} ></div>
      <div className={`green ${selected == 'green' ? 'active' : ''}`} ></div>
    </div>
    <button className="btn btn-success boton" onClick={() => setActive(true)}>Activar</button>
  </div>
  
</>
	);
};

export default Home;
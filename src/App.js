import React from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
  return (
    <div class={props.color}>
    <figcaption>
      <h2>{props.name} <span>{props.lastName}</span></h2>
  <p>{props.desc}</p>
      <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
    </figcaption><img src={props.img} alt="sample9" />
    <div class="position">{props.jobs}</div>
  </div>
   );
}
const App = () =>{
  return(
<div>
    <Card name = "Layndo Safara"
          lastName="Aqsa"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio justo, sollicitudin eget gravida nec, cursus a enim. Nulla ut erat metus. Sed fringilla imperdiet "
          img="https://solve.technow.id/storage/user/14" 
          color="card blue" 
          jobs="Web Developer"  />
    <Card name = "Muhamad "
          lastName="Ady Pamungkas"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio justo, sollicitudin eget gravida nec, cursus a enim. Nulla ut erat metus. Sed fringilla imperdiet "
          img="https://solve.technow.id/storage/user/5" 
          color="card yellow" 
          jobs="Mobile Developer"  />
        
   </div>
  );
}

export default App;

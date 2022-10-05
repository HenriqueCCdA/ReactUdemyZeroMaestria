import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditinalRender from './components/ConditinalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';

function App() {
  const [userName] = useState("Maria");
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src='/img1.jpg' alt='Paisagem'/>
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt='Cidade' />
      </div>
      <ManageData />
      <ListRender />
      <ConditinalRender />
      {/* props */}
      <ShowUsername name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditinalRender from './components/ConditinalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/Desafio';

function App() {
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 243},
  ];

  function showMessage() {
    console.log('Evento do componente');
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { nome: 'Fo', idade: 30, profissao: 'medico' },
    { nome: 'Fi', idade: 17, profissao: 'Estudante'}
  ];

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
      {/* loop rm array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.brand}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* Executar funcção */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      { pessoas.map((p, i) => (
        <UserDetails key={i} name={p.nome} job={p.profissao} age={p.idade}/>
      ))}
    </div>
  );
}

export default App;

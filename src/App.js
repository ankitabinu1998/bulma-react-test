import 'bulma/css/bulma.css';
import './App.css';
import { useState } from 'react';
import Animal from './Animal';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';

function App() {
  const [numberOfAnimals,setNumberOfAnimals] = useState(0);
  const [listOfAnimals,setListOfAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animalsToChoose = [
      {
        name: 'bird',
        pic: bird,
      },{
        name: 'cat',
        pic: cat,
      },{
        name: 'cow',
        pic: cow,
      },{
        name: 'dog',
        pic: dog,
      },{
        name: 'gator',
        pic: gator,
      },{
        name: 'horse',
        pic: horse,
      }];
    const randomNumber = Math.floor(Math.random() * animalsToChoose.length);
    return animalsToChoose[randomNumber];
  }

  const handleClick = () => {
    setNumberOfAnimals(numberOfAnimals+1);
    setListOfAnimals([...listOfAnimals,getRandomAnimal()]);
  }
  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Animals
          </p>
        </div>
      </section>
      <section className='section'>
        <button onClick={handleClick} className="button is-primary"> Add Animal</button>
      </section>
      <section className="section">
        <div className='list-of-animals'>
          {listOfAnimals.map((animal,index) => {
          return <Animal name={animal.name} keyValue={index} pic={animal.pic}/>
          })}
        </div>
       </section>

    </div>
  );
}

export default App;

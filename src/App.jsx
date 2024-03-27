import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import JokeArea from './components/JokeArea'

function App() {
  const [isSingle, setIsSingle] = useState(false);
  const [joke, setJoke] = useState("");

  const callJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single")
      .then(res => res.json())
      .then(data => {
        setJoke(data.joke);
        setIsSingle(true);
        console.log(joke);
      })
      .catch(error => console.error('Error fetching joke:', error));
 };

 useEffect(() => {
  setJoke(joke)
 },[joke]);

  return (
    <>
    <Button text={"cuentame un chiste"} fun={callJokes}/>
    {isSingle && <JokeArea text={joke}/>}
    </>
  )
}

export default App

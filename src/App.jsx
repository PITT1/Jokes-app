import { useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import JokeArea from './components/JokeArea'

let tipeJoke = []
let setupJoke = []
let deliveryJoke = []
let singleJoke = []

function App() {

  const callJokes = () => {

  }

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10")
    .then(res => res.json())
    .then(data => {

      for (let i = 0; i < data.jokes.length; i++) {
        if(data.jokes[i].type == "single" ){
          tipeJoke.push(data.jokes[i].type);
          singleJoke.push(data.jokes[i].joke);
        } else if(data.jokes[i].type == "twopart"){
          tipeJoke.push(data.jokes[i].type);
          setupJoke.push(data.jokes[i].setup);
          deliveryJoke.push(data.jokes[i].delivery);
        }
      }

    })

    return () => {

    }
  },[]);

  return (
    <>
    <Button text={"cuentame un chiste"} fun={callJokes}/>
    <JokeArea 
      text1='que le dice un pollito policia a otro pollito policia'
      text2={"necesitamos apollo"}
      typeJoke={"twopart"}/>
    </>
  )
}

export default App

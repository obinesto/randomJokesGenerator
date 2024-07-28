import React, { useEffect, useState } from 'react'
import "./Joke.css"
import axios from 'axios'
const myApi = "https://api.chucknorris.io/jokes/random"
import myImage from "../assets/infinity.gif"

const Joke = () => {
  const [jokes, setJokes] = React.useState([])
  const [isLoading, setIsLoading] = useState(false)

  const HandleJokes = () =>{
    setIsLoading(true)
      axios.get(myApi).then((res)=>{
      setJokes(res.data)
      setIsLoading(false)
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    HandleJokes()
  }, [])
  
  return (
    <>
    <div className='joke'>
      <h1>Jokes Generator</h1>
      <div className='line'></div>
      {
        isLoading ? (<img src = {myImage}/>) : (<p>{jokes.value}</p>)
        
      }
      <h4 className='joke-id'>Joke-Id:{jokes.id}</h4>
      <button className='joke-btn' onClick={()=>HandleJokes()}>Generate Joke</button>
    </div>
    
    </>
  )
}

export default Joke
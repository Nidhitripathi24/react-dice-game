import Startgame from "./components/Startgame"
import Gameplay from "./components/GamePlay"
import { useState } from "react";

function  App(){

  const[isGameStarted, setIsGameStarted] = useState (false)

  const toggleGameplay =()=>{
    setIsGameStarted((prev) => !prev)  
  };
  return(
    <>
    {
      isGameStarted ? <Gameplay/> : <Startgame
      toggle = {toggleGameplay}
      />
    }
    
    </>
  )
}
export default App;


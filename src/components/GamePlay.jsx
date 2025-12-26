import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay=()=>{
      const [score, setScore] = useState(0);
      const[selectedNumber, setSelectedNumber]= useState();
      const [currentDice, setCurrentDice] = useState(1);
      const [error, setError] = useState("")
      const[showRules, setShowRules]= useState(false)

      const generateRandomNumber = (min , max)=>{
      console.log ( Math.floor(Math.random() * (max - min)+min));
    
       return  Math.floor(Math.random() * (max - min)+min)
};

const roleDice =()=>{
     if (!selectedNumber) {
        setError("You have not selected any number")
        return;}
        setError("")
    const randomNumber = generateRandomNumber(1,7);


    setCurrentDice((prev)=> randomNumber);

    

if (selectedNumber===randomNumber){
    setScore((prev)=> prev+randomNumber)}
    else{
        setScore((prev)=> prev -2)

    }
setSelectedNumber (undefined);

}

const resetScore= ()=>{
    setScore(0);
}







    return(
        <MainContainer>
        <div className="topsection"> 
        <TotalScore score = {score}/> 
        <NumberSelector 
        error  = {error}
        setError= {setError}
        selectedNumber ={selectedNumber}
        setSelectedNumber={ setSelectedNumber}
        />
        </div>
        <RollDice
        currentDice = {currentDice}
        roleDice ={roleDice}

        />
        <div className="btns">
            <OutLineButton
            onClick={resetScore}
            >Reset Score</OutLineButton>
            <Button 
            onClick={()=> setShowRules ((prev) => !prev)}
            >{
                showRules ? "hide" : "Show"}
                Rules</Button>
                </div>
           { showRules  && < Rules/>}

        </MainContainer>
    )
}

export default GamePlay;


const MainContainer= styled.main`
padding-top: 70px;

.topsection{
display:flex;
justify-content: space-around;
align-items: end;

}
.btns{
gap: 10px;
margin-top : 40px;
display:flex;
flex-direction: column;
justify-content: center;
gap:10px;
align-items: center;
}
`
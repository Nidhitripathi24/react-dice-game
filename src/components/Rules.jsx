import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
          How to play Dice Game  
        </h2>
        <div className="text">
            <p>Select any number</p>
              <p> Click on dice image</p>
               after click on  dice  
               if selected number is equal to dice 
               number you will get same point as dice 
               if you get wrong guess then 2 point will be dedcuted 
        </div>
    </RulesContainer>
  )
}

export default Rules
 const RulesContainer = styled.div`
 background-color: #934444ff;
 max-width :  800px;
 margin: 0 auto;
 margin-top: 40px;
 border-radius: 10px;
 padding : 20px;
 h2{
 font-size :24px;
 font-weight : bold
 }
 .text {
 margin-top: 24px
 }
 `
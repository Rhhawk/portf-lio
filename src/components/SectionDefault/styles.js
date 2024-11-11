import styled from "styled-components";

export const StyleSectionDefault = styled.div`
    
    width: 1500px;
    //min-height: 80vh;
    background: var(--black-color);
    margin-top: 120px;
    border-radius: 30px;
    box-shadow: 0px 0px 200px 50px var(--dshadow-color);
    padding: 20px 15px 30px 15px;
   
    @media (max-width: 1505px){
        width: 1100px;
        margin-top: 100px;
    }
    @media (max-width: 1105px){
        width: 800px;
        padding: 15px 15px 25px 15px;
    }
    @media (max-width: 805px){
        width: 350px;
        padding: 15px 5px 25px 5px;
        
       
    }
`

import { createGlobalStyle } from "styled-components";
//#177598;rgba(0, 0, 0, .7);

const GlobalStyles = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: "Montserrat", sans-serif;
    font-family: "Krona One", sans-serif;
    text-decoration: none;
    
}

::-webkit-scrollbar {
    width: 15px;
    background: var(--black-color);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--dshadow-color);
    border: 3px solid var(--black-color);
  }
    
:root {
    --dblue-color: rgb(0, 10, 40);
    --lblue-color: #2449d4;
    --blue-color: #10246f;
    --black-color: #000000;
    --white-color: #FFFF;
    --dshadow-color: rgb(0, 20, 100);
    --shadow-color: rgba(10, 30, 120, 0.85);
    --lshadow-color: rgba(0, 40, 150, 0.85);

    
}

`
/*
export const SectionExperience = styled.div`
    width: 1500px;
    min-height: 80vh;
    background: var(--black-color);
    margin-top: 120px;
    border-radius: 30px;
    box-shadow: 0px 0px 200px 50px var(--dshadow-color);
    padding: 20px;   
    `
    export const SectionEducation = styled.div`
    width: 1500px;
    min-height: 80vh;
    background: var(--black-color);
    margin-top: 120px;
    border-radius: 30px;
    box-shadow: 0px 0px 200px 50px var(--dshadow-color);
    padding: 20px;
`
export const SectionProjects = styled.div`
    width: 1500px;
    min-height: 80vh;
    background: var(--black-color);
    margin-top: 120px;
    border-radius: 30px;
    box-shadow: 0px 0px 200px 50px var(--dshadow-color);
    padding: 20px;
    `    

*/
export default GlobalStyles;
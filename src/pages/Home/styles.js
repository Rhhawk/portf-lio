import styled from "styled-components";

export const Body = styled.div`
    background: var(--dblue-color);
    color: var(--white-color);
    //width: 100vw;
    width: 100%;
    overflow-x: hidden; /* Oculta a rolagem horizontal */
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Header = styled.div`
    position: fixed;
    top: 0;
    //width: 100vw;
    width: 100%;
    padding: 30px 4%;
    

    /*${({ isSticky }) => (isSticky ? 'blue' : 'transparent')};*/
    background: transparent; 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 100;
    transition: .5s;
    

    /*&.sticky {
    background: var(--bg-color);
    box-shadow: 0px 0px 15px 5px rgb(35, 40, 100);
    }*/

    ${({ $isSticky }) => $isSticky && `
    padding: 25px 4%;
    background: var(--black-color);
    box-shadow: 0px 0px 15px 5px rgb(35, 40, 100);
  `}

   `

export const Nav = styled.div`
display: flex;
gap: 30px;
@media (max-width: 1505px){
    gap: 25px;
    }
    @media (max-width: 805px){
        gap: 15px;
    }

a{
    font-size: 20px;
    color: var(--white-color);
    text-shadow: 3px 1px 3px rgb(90, 90, 90);
    text-decoration: none; /* Remove qualquer sublinhado padrão */
    padding-bottom: 5px; /* Um espaço para o efeito de sublinhado */
    position: relative; /* Necessário para o pseudo-elemento */
    transition: color 0.5s ease, text-shadow 0.5s; /* Transição para a cor e a sombra */
    font-family: "Montserrat", sans-serif;
    @media (max-width: 1505px){
        font-size: 18px;
    }
    @media (max-width: 805px){
        font-size: 15px;
    }


  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* Alinhar o sublinhado ao fundo do texto */
    height: 3px; /* Altura do sublinhado */
    background: var(--white-color); /* Cor do sublinhado */
    transform: scaleX(0); /* Começa escondido */
    transition: transform 0.4s ease; /* Transição suave */
    
  }

  &:hover {
    color: var(--lblue-color); /* Cor do link ao passar o mouse */
    text-shadow: 3px 1px 3px var(--dshadow-color); /* Sombra ao passar o mouse */

    
  }

  &.active {
    /* O sublinhado permanece quando a seção está ativa */
    &::after {
      transform: scaleX(1); /* Mantém o sublinhado ativo */
      
    }
    
  }
}
`

export const IconNav = styled.div`
margin-left: 50px;
display: flex;  
align-items: center;
gap: 5px;
color: rgb(230, 230, 230);
font-size: 30px;
@media (max-width: 1505px){
        font-size: 28px;
    }
    @media (max-width: 805px){
        display: none;
    }

h1{
    font-size: 20px;
    font-style: italic;
    cursor: pointer;
    color: var(--lblue-color);    
    text-shadow: 3px 1px 3px var(--dshadow-color);
    @media (max-width: 1505px){
        font-size: 18px;
    }

}
`

export const SectionHome = styled.div`
    width: 1500px;
    //min-height: 80vh;
    background: var(--black-color);
    padding: 100px 1% 20px;
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    gap: 20px;
    border-radius: 30px;
    justify-content: space-between;
    box-shadow: 0px 0px 200px 50px var(--dshadow-color);
    @media (max-width: 1505px){
        width: 1100px;
        padding: 100px 2% 20px;
        gap: 20px;
        
    }
    @media (max-width: 1105px){
        width: 800px;
        padding: 70px 2% 10px;
    }
    @media (max-width: 805px){
        width: 350px;
        flex-direction: column;
        padding: 50px 2% 15px;
    }
    //scroll-margin-top: 100px; /* Ajuste o valor conforme necessário */


    

`

export const ContainerInformation = styled.div`
    margin-top: 45px;
    @media (max-width: 1505px){
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    

    p{
        font-family: "Montserrat", sans-serif;
        font-size: 21px;
        line-height: 28px;
        font-weight: 400;  
        strong{
            color: var(--lblue-color);
            
            
        }

        @media (max-width: 1505px){
            font-size: 18px;
            line-height: 25px;
            font-weight: 400;                
        }

        @media (max-width: 1105px){
            text-align: justify;
        }

        @media (max-width: 805px){
            font-size: 14px;
            line-height: 19px;
            font-weight: 300; 
            text-align: start;   
        }
    }

    
`
export const TitleWork = styled.h1`
    font-size: 38px;
    text-align: center;
    @media (max-width: 1505px){
        font-size: 30px;
    }
    @media (max-width: 1105px){
        font-size: 27px;
    }
    @media (max-width: 805px){
        font-size: 16px;
    }
    span{
        color: var(--lblue-color);

    }
`

export const TitleName = styled.h1`
    text-align: center;
    color: var(--lblue-color);
    font-size: 40px;
    @media (max-width: 1505px){
        font-size: 32px;
        
    }
    @media (max-width: 1105px){
        font-size: 29px;
    }

    @media (max-width: 805px){
            font-size: 19px;
               
        }
`

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    h2{
        margin: 60px 0px 10px 0px;
        @media (max-width: 805px){
            margin: 40px 0px 10px 0px;
            font-size: 16px;
            text-align: center;
               
        }
    }

    div{
    display: flex;
    gap: 20px;
    @media (max-width: 1505px){
            gap: 12px;
    }
    @media (max-width: 805px){
            gap: 10px;
           // display: grid;
           // grid-template-columns: repeat(3, 1fr); /* 3 colunas de largura igual */
            //grid-template-rows: repeat(2, 1fr);    /* 2 linhas de largura igual */
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--blue-color);
        width: 200px;
        height: 55px;
        border-radius: 10px;
        color: var(--white-color);
        gap: 8px;
        
        @media (max-width: 1505px){
            width: 150px;
            height: 45px;
            border-radius: 10px;
            font-size: 14px;
            gap: 7px;
    }

    @media (max-width: 805px){
            width: 200px;
            height: 35px;
            border-radius: 10px;
            font-size: 11px;
            gap: 15px;
               
        }
        &:hover{
            background: var(--black-color);
            border: solid 3px var(--blue-color);
            color: var(--lblue-color);
            font-size: 20px;
            @media (max-width: 1505px){
            font-size: 16px;
              
            }
            @media (max-width: 805px){
            font-size: 15px;
               
            }
    
        
        }

    }

    a:nth-child(4){
        margin-left: 100px;
        background:  var(--lblue-color);
        @media (max-width: 1505px){
            margin-left: 90px;
        }
        @media (max-width: 805px){
            margin-left: 0px;
            margin-top: 20px;
            //grid-column: 2 / 3;
        }

        .icondoc {
                                
                @media (max-width: 805px){
               
        }
    }
        
        &:hover{
            background: var(--black-color);
            font-size: 18px;
            border: solid 3px var(--lblue-color);
            color: var(--lblue-color);
            

            @media (max-width: 1505px){
            font-size: 14px;
              
        }
            @media (max-width: 805px){
            font-size: 15px;
               
        }
            .icondoc {
                color: var(--white-color);
                
                @media (max-width: 805px){
                
        }
            }
        

    }
}
`

export const ImgPrincipal = styled.div`
    margin-top: 60px;
    margin-right: 70px;
    width: 400px;
    height: 480px;
    border-radius: 40px;
    background: rgb(10, 10, 80);
    box-shadow: 40px -40px 2px -15px rgb(20, 20, 100);
    border: solid 13px var(--black-color);
    @media (max-width: 1505px){
        margin-top: 86px;
        margin-right: 30px;
        border-radius: 30px;
        width: 300px;
        height: 380px;
        background: rgb(10, 10, 80);
        box-shadow: 30px -30px 2px -15px rgb(20, 20, 100);
        border: solid 10px var(--black-color);
                
    }

    @media (max-width: 1105px){
        display: none;
    }

    img{
        width: 469px;
        position: relative;
        bottom: 146px;
        right:  0px;
        border-radius: 50px;
        @media (max-width: 1505px){
        width: 349px;
        border-radius: 25px;
        bottom: 85px;
        right:  0px;
        
    }
    @media (max-width: 1105px){
        display: none;
    }
        }


`

export const SectionSkills = styled.div`
    margin-top: 100px;
    @media (max-width: 1505px){
        margin-top: 90px;
        
    }

    @media (max-width: 1105px){
        margin-top: 90px;
    }

    

`

export const ContainerSkill = styled.div`
    display: flex;
    gap: 150px;
    text-align: center;
    @media (max-width: 1505px){
        gap: 120px;
    }
    @media (max-width: 1105px){
        gap: 90px;
    }
    @media (max-width: 805px){
                gap: 20px;
                display: flex;
                flex-direction: column;
        }

        div{
            &:hover{
            color: var(--lblue-color);
          
            
            
        }
        }
    i {
        font-size: 100px;
        @media (max-width: 1505px){
        font-size: 70px;
    }
    @media (max-width: 1105px){
        font-size: 60px;
    }

    @media (max-width: 805px){
                font-size: 20px;
        }
    }

    
    `

export const ContainerExperience = styled.div`

    display: grid;
    grid-template-columns: 670px 670px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
    font-style: italic;
    @media (max-width: 1505px){
        grid-template-columns: 510px 510px; 
        
         }
    @media (max-width: 1105px){
            grid-template-columns: 370px 370px; 
            gap: 30px;
    }
    @media (max-width: 805px){
        grid-template-columns: 330px; 
        gap: 22px;
    }
    div{
        height: 190px;
        width: 630px;
        border-radius: 20px;
        border: solid 1px rgba(10, 10, 10);
        box-shadow: 5px 5px 5px 0px var(--shadow-color);
        text-align: center;
        @media (max-width: 1505px){
            height: 190px;
            width: 500px;
         }
         @media (max-width: 1105px){
            height: 160px;
            width: 360px;
        }

        @media (max-width: 805px){
            height: 150px;
            width: 320px;
    }
        &:hover{
        box-shadow: 5px 5px 5px 10px var(--lshadow-color);
        transition: 0.5s ease-in-out;

    }

        &:hover{
            background-color: var(--dblue-color);
            transition: 0.3s ease-in-out;
        }
    h1{
        font-size: 25px;
        @media (max-width: 1505px){
            font-size: 20px;
         }
         @media (max-width: 1105px){
            font-size: 17px;
            margin-top: 2px;
        }

        @media (max-width: 805px){
            font-size: 15px;
            margin-top: 3px;
    }
        span{
            font-size: 30px;
            @media (max-width: 1505px){
            font-size: 25px;
         }

         @media (max-width: 1105px){
            font-size: 23px;
            margin-top: 2px;
        }

        @media (max-width: 805px){
            font-size: 18px;
            
        }

        }
    }
    h2{
        margin-top: 18px;
        font-size: 18px;
        font-family: "Montserrat", sans-serif;

        @media (max-width: 1105px){
            font-size: 14px;
            margin-top: 17px;
        }

        @media (max-width: 805px){
            font-size: 13px;
            margin-top: 10px;
        }

    }
    p{
        margin-top: 18px;
        font-size: 15px;
        font-family: "Montserrat", sans-serif;
        @media (max-width: 1105px){
            font-size: 12px;
            margin-top: 17px;
        }
        
        @media (max-width: 805px){
            margin-top: 10px;
        }

        
    }
}
`

export const ContainerEducation = styled.div`
    display: grid;
    grid-template-columns: 670px 670px; 
    justify-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
    font-style: italic;
    @media (max-width: 1505px){
        grid-template-columns: 510px 510px; 
         }
    @media (max-width: 1105px){
            grid-template-columns: 370px 370px; 
            gap: 30px;
    }

    @media (max-width: 805px){
        grid-template-columns: 330px; 
        gap: 22px;
    }

    div{
        height: 190px;
        width: 630px;
        border-radius: 20px;
        border: solid 1px rgba(10, 10, 10);
        box-shadow: 6px 4px 10px 0.5px var(--shadow-color);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 1505px){
            height: 190px;
            width: 500px;
         }

         @media (max-width: 1105px){
            height: 160px;
            width: 360px;
            padding: 2px;
        }

        @media (max-width: 805px){
            height: 150px;
            width: 320px;
    }

        &:hover{
        box-shadow: 5px 5px 5px 10px var(--lshadow-color);
        transition: 0.5s ease-in-out;

        }

        &:hover{
            background-color: var(--dblue-color);
            transition: 0.3s ease-in-out;
        }
    h1{
        font-size: 25px;
        @media (max-width: 1505px){
            font-size: 20px;
            margin-top: 3px;
         } 
         @media (max-width: 1105px){
            font-size: 17px;
            }
            @media (max-width: 805px){
            font-size: 15px;
    }
         
    }
    h2{
        margin-top: 18px;
        font-size: 15px;
        font-family: "Montserrat", sans-serif;

        @media (max-width: 1505px){
            font-size: 14px;
         }
         @media (max-width: 1105px){
            font-size: 13px;
            margin-top: 17px;
        }

        @media (max-width: 805px){
            font-size: 13px;
            margin-top: 10px;
    }
    }
    p{
        margin-top: 18px;
        font-size: 15px;
        font-family: "Montserrat", sans-serif;

        @media (max-width: 1505px){
            font-size: 14px;
         }
         @media (max-width: 1105px){
            font-size: 13px;
            margin-top: 17px;
        }
        @media (max-width: 805px){
            font-size: 12px;
            margin-top: 14px;
    }
         
    }
}
`

export const ContainerProjects = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    padding: 20px;
    font-style: italic;
    @media (max-width: 1505px){
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        padding: 10px;
         }
         @media (max-width: 1105px){
            gap: 20px;
            padding: 0px;
        }

        @media (max-width: 805px){
        grid-template-columns: repeat(1, 1fr);
        //grid-template-columns: 330px;  
        gap: 22px;
        justify-items: center;
        justify-content: center;
    }
              
        
`
export const ImgProj = styled.img`
            transition: 0.5s ease;
            width: 100%;

            
`
export const ProjBox = styled.div`

        position: relative;
        display: flex;    
        border-radius: 30px;
        border: solid 1px rgba(10, 10, 10);
        box-shadow: 6px 4px 10px 0.5px var(--shadow-color);
        text-align: center;
        overflow: hidden;
        height: 300px;
        opacity: 0.8;
        @media (max-width: 1105px){
            height: 250px;
        }

        @media (max-width: 805px){
            height: 220px;
            width: 320px;
    }
            

        &:hover{
        box-shadow: 5px 5px 5px 10px var(--lshadow-color);
        transition: 1s ease-in;
        

        }

        &:hover .proj-text {
            opacity: 1;
            }
        

`
export const ProjText = styled.div`

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 70, 0.772), var(--dblue-color));
    backdrop-filter: blur(8px);
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 40px;
    opacity: 0;
    transition: .5s ease;

    

        h4{
            font-size: 25px;
            padding-bottom: 20px;

            @media (max-width: 805px){
                font-size: 16px;
                padding-bottom: 10px;
    }
        }
        p{
            font-size: 16px;
            margin: 3px 0 10px;
            /* padding-bottom: 10px; */
            height: 50%;
            @media (max-width: 805px){
                font-size: 12px;
                margin: 3px -10px 15px;
                margin-bottom: 0px;
    }
        }
        a{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 30px;
        background: var(--white-color);
        color: var(--black-color);
        border-radius: 40px;
        font-size: 15px;
        font-weight: 500;
        top: 10px;
        transition: .5s ease;
        @media (max-width: 805px){
                font-size: 13px;
                margin-bottom: 2px;
    }
            &:hover{
            background: var(--blue-color);
            color: var(--white-color);
            border: 5px solid var(--white-color);
            }
        }
       `
export const ProjLinks = styled.div`

        display: flex;
        justify-content: center;
        gap: 50px;

        @media (max-width: 805px){
                
                margin-top: 5px;
    }
`
export const Footer = styled.div`
width: 100vw;
background: var(--black-color);
text-align: start;
padding: 30px;
margin-top: 40px;
 p{
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 805px){
                font-size: 10px;
                
    }
 }
`


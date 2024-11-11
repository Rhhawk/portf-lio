import { Body, ContainerEducation, ContainerExperience, ContainerInformation, ContainerLinks, ContainerProjects, ContainerSkill, Footer, Header, IconNav, ImgPrincipal, ImgProj, Nav, ProjBox, ProjLinks, ProjText, SectionHome, SectionSkills, TitleName, TitleWork } from "./styles"
import React, { useState, useEffect,} from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import ImgPerfil from '../../assets/perfil7.png'
import GifConvert from '../../assets/convert15.gif'
import GifMario from '../../assets/mario15.gif'
import GifJokempo from '../../assets/jokempo15.gif'
import GifSlide from '../../assets/slide15.gif'
import GifShopping from '../../assets/shopping15.gif'
import GifStarbucks from '../../assets/starbucks15.gif'
import { AiTwotoneFileText } from "react-icons/ai";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { SiHomepage } from "react-icons/si";
import ScrollReveal from 'scrollreveal';
import SubSections from '../../components/SectionDefault'




function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Observar todas as seções com IDs especificados
    const sections = ['inicio', 'experiencia', 'formação', 'projetos'];

    // Função de callback para detectar qual seção está visível
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Atualiza a seção ativa
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6, // Define quando considerar que uma seção está visível (60% de visibilidade)
    });

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });


    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  /*useEffect(() => {
    // Garante que a página comece no topo após o carregamento
    window.scrollTo(0, 0);
  }, []);*/

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }


    // Função de scroll suave com offset de 100px
    const handleSmoothScroll = (event, targetId) => {
      event.preventDefault(); // Previne o comportamento padrão do link

      const targetElement = document.querySelector(targetId);
      const yOffset = -100; // O valor do offset (ajuste de espaçamento)
      
    
      if (targetElement) { 

        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + yOffset;
        // Usamos window.scrollTo para mover suavemente a página até o local desejado
        //requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        console.log(`Target ID: ${targetId}, Offset Position: ${offsetPosition}`);

       }
    };

    
  useEffect(() => {
    
    // Inicializa o ScrollReveal apenas uma vez
    const sr = ScrollReveal({
      reset: true, // Animação só acontece na primeira entrada
      distance: '50px', // Distância de deslocamento da animação
      duration: 1400, // Duração da animação
      easing: 'ease-in-out', // Suavidade da animação
    });

    // Aplica a animação para as seções
    sr.reveal('#inicio', { origin: 'top' });

    sr.reveal('#experiencia', { 
      origin: 'top',
      scale: 0.83,  // Começa menor e vai crescendo
      opacity: 0, // Começa invisível e vai aparecendo
      duration: 1400, // Duração da animação
      delay: 200,
      easing: 'ease-in-out', });

      sr.reveal('#experiencebox1', {
        origin: 'right',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1000, // Duração da animação
        easing: 'ease-in-out',
      });
      sr.reveal('#experiencebox3', {
        origin: 'right',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1400, // Duração da animação
        easing: 'ease-in-out',
      });

      sr.reveal('#experiencebox2', {
        origin: 'left',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1000, // Duração da animação
        easing: 'ease-in-out',
      });

      sr.reveal('#experiencebox4', {
        origin: 'left',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1400, // Duração da animação
        easing: 'ease-in-out',
      });

    sr.reveal('#formação', { 
      origin: 'top',
      scale: 0.83,  // Começa menor e vai crescendo
      //opacity: 0.2, // Começa invisível e vai aparecendo
      duration: 1400, // Duração da animação
      delay: 200,
      easing: 'ease-in-out', });

      sr.reveal('#formacaobox2', {
        origin: 'right',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1000, // Duração da animação
        easing: 'ease-in-out',
      });
      sr.reveal('#formacaobox4', {
        origin: 'right',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1400, // Duração da animação
        easing: 'ease-in-out',
      });

      sr.reveal('#formacaobox1', {
        origin: 'left',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1000, // Duração da animação
        easing: 'ease-in-out',
      });

      sr.reveal('#formacaobox3', {
        origin: 'left',
        distance: '80px',
        scale: 0.88,  // Começa menor e vai crescendo
        opacity: 0.2, // Começa invisível e vai aparecendo
        duration: 1400, // Duração da animação
        easing: 'ease-in-out',
      });

    sr.reveal('#projetos', {
      origin: 'top',
      scale: 0.88,  // Começa menor e vai crescendo
      //opacity: 0.2, // Começa invisível e vai aparecendo
      duration: 1400, // Duração da animação
      easing: 'ease-in-out',
    });

    sr.reveal('#projetosbox', {
      origin: 'bottom',
      scale: 0.88,  // Começa menor e vai crescendo
      opacity: 0.2, // Começa invisível e vai aparecendo
      duration: 1400, // Duração da animação
      easing: 'ease-in-out',
    });

    sr.reveal('#img',{
      scale: 0.6,  // Começa menor e vai crescendo
      origin: 'bottom',
      distance: '115px',
      opacity: 0.5, // Começa invisível e vai aparecendo
      duration: 1400, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });

    sr.reveal('#titlework',{
      origin: 'left',
      distance: '100px',
      duration: 1600, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });

    sr.reveal('#titlename',{
      origin: 'right',
      distance: '100px',
      duration: 1600, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });
    sr.reveal('#logohtml',{
      origin: 'left',
      distance: '600px',
      duration: 1700, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });
    sr.reveal('#logocss',{
      origin: 'left',
      distance: '400px',
      duration: 1500, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });

    sr.reveal('#logojava',{
      origin: 'top',
      distance: '100px',
      duration: 1500, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });

    sr.reveal('#logoreact',{
      origin: 'right',
      distance: '400px',
      duration: 1500, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });

    sr.reveal('#logonode',{
      origin: 'right',
      distance: '600px',
      duration: 1700, // Duração da animação
      delay: 200,
      easing: 'ease-in-out',
      
    });
    
    
    
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
    
  }, []);

  

  return (
    <>
      <Body>
        <Header $isSticky={isSticky} className={isSticky ? 'sticky' : ''}>
        
          <Nav>
            <a href="#inicio" aria-label="Ir para a seção Início" onClick={(e) => handleSmoothScroll(e, '#inicio')}   className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a>
            <a href="#experiencia" aria-label="Ir para a seção Experiência" onClick={(e) => handleSmoothScroll(e, '#experiencia')} className={activeSection === 'experiencia' ? 'active' : ''}>Experiencia</a>
            <a href="#formação" aria-label="Ir para a seção Formação" onClick={(e) => handleSmoothScroll(e, '#formação')} className={activeSection === 'formação' ? 'active' : ''}>Formação</a>
            <a href="#projetos" aria-label="Ir para a seção Projetos" onClick={(e) => handleSmoothScroll(e, '#projetos')} className={activeSection === 'projetos' ? 'active' : ''} >Projetos</a>

          </Nav>
          <IconNav>
            <SiHomepage /> <a href="#"><h1>HSilva.</h1></a>
            
            </IconNav>
          
        </Header>
        <SectionHome className="section" id="inicio">
          <ContainerInformation>
            <TitleWork id="titlework">Desenvolvedor Júnior <strong>Full Stack</strong> </TitleWork>
            <br/>
            <TitleName id="titlename">Henrique Silva Costa</TitleName>
            <br />
            <br />
            <p>Olá, me chamo Henrique, sou profissional da área da tecnologia, estou buscando uma oportunidade como um Desenvolver Full Stack Junior.
              <br />
              <br />
              Estou cursando Programação Full Stack na maior instituição do Brasil, a <strong>DevClub</strong>, nela ja adquiri o conhecimento das tecnologias:
              <br />
              
              
              <strong>HTML5;</strong> <strong>CSS3;</strong> <strong>JavaScript;</strong> <strong>ReactJS;</strong> <strong>Node.js</strong>.
              <br />
              </p>
              
              
            <ContainerLinks>
              <h2>Acesse minhas redes:</h2>
             
              <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/henrique-s-costa/"  aria-label="LinkedIn de Henrique Silva Costa">
                <FaLinkedin />  Linkedin
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhhawk" aria-label="GitHub de Henrique Silva Costa">
                <FaGithub /> GitHub
                </a>
              <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=5511966523964&text&type=phone_number&app_absent=0" aria-label="Enviar mensagem para Henrique Silva Costa no WhatsApp">
                <FaWhatsapp /> WhatsApp 
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/src/Henrique-Silva-Costa-CV.pdf"  aria-label="PDF do currículo de Henrique Silva Costa"> <div className="icondoc"><AiTwotoneFileText  /></div>Download CV</a>
              
              </div>
            </ContainerLinks>
          </ContainerInformation>

          <ImgPrincipal>
          <img id="img" src={ImgPerfil} alt="imagem-perfil" />
          </ImgPrincipal>

        </SectionHome>


        <SectionSkills>
          <ContainerSkill>

            <div id="logohtml">
              <i><IoLogoHtml5 />
              </i>
              <h3>HTML5</h3>
            </div>
            <div id="logocss">
              <i><IoLogoCss3 />
              </i>
              <h3>CSS3</h3>
            </div>
            <div id="logojava">
              <i><IoLogoJavascript />
              </i>
              <h3>Javascript</h3>
            </div>
            <div id="logoreact">
              <i><IoLogoReact />
              </i>
              <h3>React</h3>
            </div>
            <div id="logonode">
              <i><IoLogoNodejs />
              </i>
              <h3>Node.js</h3>
            </div>
            

          </ContainerSkill>
                              
        </SectionSkills>

        <SubSections className="section" id="experiencia">
          <TitleWork>
            <i>Experiência 🧰<br/>
        <span>Profissional</span></i>
        </TitleWork>
        <ContainerExperience>
        <div id="experiencebox1">
          <h1>FREELANCER <span>👨🏽‍💻</span></h1>
          <h2>Desenvolvedor Full Stack
          <br/>01/2024 ATÉ O MOMENTO
          </h2>
            <p>
                    • Desenvolvimento de Websites responsivos; <br/>
                    • Tecnologias: HTML5, CSS3, JavaScript, ReactJS e NodeJS; <br/>
                    • Criação de Banco de Dados, ultilização de APIS.
            </p>
        </div>

        <div id="experiencebox2">
          <h1>AEROSOFT CARGAS AÉREAS ✈️</h1>
          <h2>Estoquista
          <br/>03/2018 - 04/2024
          </h2>
            <p>
                    • Controle de estoque, Liderança;<br/>
                    • Ferramenta SAP ERP, Preparo e envio de Relatórios; <br/>
                    • Homologação de Pagamento, Controle de KM.
            </p>
        </div>

        <div id="experiencebox3">
          <h1>MOBIBRASIL 🚌</h1>
          <h2>Almoxarife
          <br/>06/2015 - 02/2017
          </h2>
            <p>
                    • Análise de estoque, Curva ABC; <br/>
                    • Inventario Cíclico, Aplicaçãométodo FIFO;<br/>
                    • Conferência de nota fiscal e recebimento.
            </p>
        </div>

        <div id="experiencebox4">
          <h1>POSTO ISOLA ⛽</h1>
          <h2>Promotor de Loja
          <br/>10/2013 - 07/2014
          </h2>
            <p>
                    • Atendimento ao publico; <br/>
                    • Promover produtos; <br/>
                    • Controle de estoque, Operação do caixa.
            </p>
        </div>

        </ContainerExperience>
        </SubSections>

        <SubSections className="section" id="formação">
        <TitleWork>
            <i>Cursos 📚<br/>
        <span>Formações</span></i>
        </TitleWork>
        <ContainerEducation>

        <div id="formacaobox1">
        <h1>DEV CLUB</h1>
                <h2>Janeiro de 2024 - Janeiro de 2025</h2>
                <h2>Formação Full Stack</h2>
                <p>HTML5 | CSS3 | JAVASCRIPT | REACT | REACT-NATIVE | NODE.JS | TYPESCRIPT | DOCKER </p>
        </div>

        <div id="formacaobox2">
        <h1>CIEE-PROGRAMA APRENDIZ</h1>
                <h2>Maio de 2011 - Maio de 2013</h2>
                <h2>Ocupações Administrativas</h2>
                <p>GESTÃO DE EMPRESAS; ADMINISTRAÇÃO; COMPORTAMENTO EMPRESARIAL</p>
        </div>

        <div id="formacaobox3">
        <h1>GIGABYTE</h1>
                <h2>Julho de 2011 - Janeiro de 2012</h2>
                <h2>Curso Multiprofissionals</h2>
                <p>PACOTEOFFICE, ADMINISTRAÇÃO, CONTABILIDADE, SECRETARIADO, CORELDRAW, PHOTOSHOP</p>
        </div>

        <div id="formacaobox4">
        <h1>E. E. AFRÂNIO DE OLIVEIRA</h1>
                <h2>Janeiro de 2011</h2>
                <h2>ENSINO MÉDIO COMPLETO</h2>
                <h2></h2>
        </div>
        
        </ContainerEducation>
        </SubSections>

        <SubSections className="section" id="projetos">
        <TitleWork>
            <i>Últimos 👩🏻‍💻<br/>
        <span>Projetos</span></i>
        </TitleWork>
          <ContainerProjects>
          <ProjBox id="projetosbox">
                <ImgProj src={GifConvert} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                <h4>Conversor de Moeda</h4>
                    <p>Site responsivo de conversão de moedas, realiza a conversão entre todas as moedas mais relevantes da atualidade. 
                      Utiliza uma API para assegurar que o valor seja atualizado em tempo real.</p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/conversor-de-moeda" target="_blank">Código</a>
                        <a href="https://rhhawk.github.io/conversor-de-moeda/" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox >
          <ProjBox id="projetosbox">
                <ImgProj src={GifMario} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                    <h4>Mario Bros Encanamento</h4>
                    <p>Projeto da criação de um site no intuito de oferecer tanto a instalação quanto a manutenção da hidráulica em casas.
                    O projeto foi feito com as tecnologias HTML5, CSS3 e JavaScript.</p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/projeto-mariobros-encanamento" target="_blank">Código</a>
                        <a href="https://mariobros-encanamento.netlify.app" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox>
          <ProjBox id="projetosbox">
                <ImgProj src={GifJokempo} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                    <h4>JOKEMPÔ</h4>
                    <p>Aplicação de um Site onde você joga o famoso jogo Jokempô, com uma interface interativa, demonstrando o placa de vitoria e eerrota.
                      a Aplicação foi desenvolvida com Javascript, CSS3 e HTML5.</p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/projeto-jokempo1.0" target="_blank">Código</a>
                        <a href="https://rhhawk.github.io/projeto-jokempo1.0/" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox>
          <ProjBox id="projetosbox">
                <ImgProj src={GifSlide} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                    <h4>Slide</h4>
                    <p>Projeto de um Site, informando cidades turisticas para se visitar, com uma interface de slide passando de cidade em cidade.
                      Desenvolvido com CSS3 e Javascript realizando animação entre os Slides.
                    </p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/proj-slide" target="_blank">Código</a>
                        <a href="https://rhhawk.github.io/proj-slide/" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox>
          <ProjBox id="projetosbox">
                <ImgProj src={GifShopping} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                    <h4>Easy Shopping Via Mobile</h4>
                    <p>Um Projeto de uma Site responsivo demonstrando um layout de uma página de compras.
                      desenvolvido com CSS3 e HTML5.
                    </p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/easy-shopping" target="_blank">Código</a>
                        <a href="https://rhhawk.github.io/easy-shopping/" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox >
          <ProjBox id="projetosbox">
                <ImgProj src={GifStarbucks} alt="Imagem do site Guia de Saúde Mental"/>

                <ProjText className="proj-text">
                    <h4>Projeto Starbucks</h4>
                    <p>Site criado para demonstrar efeitos do CSS utilizando a marca Starbucks, realizando mudanças em elementos da página.
                      Projeto realizado utilizando CSS3 e HTML5.</p>
                    <ProjLinks>
                        <a href="https://github.com/Rhhawk/projeto1-starbucks" target="_blank">Código</a>
                        <a href="https://rhhawk.github.io/projeto1-starbucks/" target="_blank">Projeto</a>
                    </ProjLinks>
                </ProjText>
          </ProjBox>
                             
          </ContainerProjects>
        </SubSections>
        <Footer>
        <p>Copyright &copy; 2024 by HenriqueSC | All Rights Reserved</p>
        </Footer>
      </Body>
    </>
  )
}

export default Home

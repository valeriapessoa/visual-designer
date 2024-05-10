import { MainSlider } from '../../components/header/main-slider/MainSlider';
import image1 from '../../assets/images/design1.png'
import image2 from '../../assets/images/design2.png'
import image3 from '../../assets/images/design3.png'
import image4 from '../../assets/images/design4.png'
import image5 from '../../assets/images/design5.png'

import AboutUs from "../../components/section/about-us/AboutUs";
import Project from "../../components/section/project/Project";
import Img5 from "../../assets/images/img4.png";
import Img6 from "../../assets/images/img5.png";
import Img7 from "../../assets/images/img6.png";
import Img8 from "../../assets/images/img7.png";
import Img9 from "../../assets/images/img8.png";
import Img10 from "../../assets/images/img9.png";
import Blog from "../../components/section/blog/Blog";
import Services from '../../components/section/services/Services';
import Contact from '../../components/section/contact/Contact';

import Footer from "../../components/footer/Footer"

export default function Home () {

    return (
      <>
      <MainSlider posterImg1={ image1 } posterImg2={ image2 } posterImg3={ image3 } posterImg4={ image4 } posterImg5={ image5 } />
        <AboutUs/>
        <section className="no-padding" id="Projects">
        <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
            <Project
              posterImg={Img5}
              title="Projeto Sumaré"
              text="Sala de amplas dimensões, projetada para oferecer conforto e acolhimento."
              modalTitle="Beleza em Cada Detalhe"
              modalText1="Neste espaço, foi concebido um ambiente amplo e convidativo, destinado a proporcionar conforto e relaxamento. A peça central deste cômodo é um sofá de generosas dimensões, revestido em um suave tom de cinza claro, que oferece um amplo espaço para acomodar amigos e familiares."
              modalText2=" As paredes de madeira proporcionam aconchego, enquanto uma grande janela permite a entrada de luz natural, sendo controlada por cortinas brancas suaves. À noite, a sala é iluminada por dois abajures estrategicamente posicionados."
              modalText3=" Uma mesa de centro no meio da sala oferece praticidade, e uma estante exibe enfeites e objetos pessoais, adicionando personalidade e profundidade ao ambiente. Este projeto harmoniza funcionalidade e estética, criando um espaço convidativo para relaxar e apreciar a beleza."
              modalImg={Img5}
            />


            <Project
              posterImg={Img6}
              title="Projeto Ibirapuera"
              text="Aprecie a elegância da nossa hidromassagem personalizada."
              modalTitle="Área de Hidromassagem"
              modalText1="O objetivo desse projeto é convidar os hóspedes a mergulharem em um oásis de tranquilidade. Feita de madeira, a banheira de hidromassagem é um destaque visual, com degraus de madeira clara formando uma escadaria que leva à água relaxante. A iluminação suave realça a atmosfera serena e convida a momentos de repouso. A espreguiçadeira branca proporciona o local perfeito para relaxar após um mergulho revigorante."
              modalText2="Uma janela grande permite a entrada abundante de luz natural, criando uma sensação de luminosidade e bem-estar."
              modalText3="A parede se destaca com uma pedraria neutra e um espelho grande que reflete a luz e amplia o espaço. Luminárias discretas adicionam charme e proporcionam a iluminação adequada para criar uma atmosfera aconchegante e convidativa. Três vasos de plantas adicionam um toque de natureza e frescor ao ambiente."
              modalImg={Img6}
            />
            <Project
              posterImg={Img7}
              title="Projeto Pinheiros"
              text="A combinação de elementos de design sofisticados, conforto e funcionalidade."
              modalTitle="Sala de Reunião Elegante"
              modalText1="O projeto da sala de reunião abraça a modernidade e a funcionalidade, criando um ambiente que inspira criatividade, colaboração e decisões estratégicas. Com uma paleta de cores neutras e elementos de design sofisticados, esta sala foi projetada para refletir o profissionalismo e a excelência da empresa."
              modalText2="O centro do espaço é dominado por uma impressionante mesa de madeira retangular, que se estende majestosamente para acomodar uma equipe completa. Sua simplicidade e elegância tornam-na o ponto focal da sala. As cadeiras de couro branco, com assentos acolchoados, oferecem conforto durante as reuniões e adicionam um toque de luxo ao ambiente."
              modalText3="A parede principal da sala de reunião exibe três quadros em preto e branco, retratando a cidade de forma icônica. Essas imagens adicionam um toque de personalidade e inspiração, enquanto o vaso de planta no canto proporciona um toque de frescor à sala. A parede, em tons neutros e com detalhes em madeira combinando com o piso, é um pano de fundo perfeito para as discussões importantes."
              modalImg={Img7}
            />
            <Project
              posterImg={Img8}
              title="Projeto Perdizes"
              text="A sala de jantar integrada em estilo moderno e clean. Funcionalidade e elegância."
              modalTitle="Modernidade e Simplicidade"
              modalText1="O projeto visa criar um espaço de convivência contemporâneo e funcional, onde a sala de estar e a sala de jantar se integram de forma fluida, promovendo uma sensação de amplitude e leveza. A ênfase recai sobre a simplicidade e a modernidade, com o uso de linhas limpas, cores neutras e materiais de alta qualidade."
              modalText2="A iluminação desempenha um papel fundamental na criação de atmosfera. Uma série de luminárias embutidas no teto fornece uma iluminação suave e uniforme, o lustre sobre a mesa de jantar criam um ponto focal aconchegante."
              modalText3="A sala de jantar integrada em estilo moderno e clean é um exemplo de design que prioriza a simplicidade, a funcionalidade e a elegância. Ela oferece um ambiente acolhedor para refeições, entretenimento e convívio, enquanto mantém um visual sofisticado e contemporâneo. A integração com elementos naturais e a atenção aos detalhes tornam este espaço um local agradável e convidativo para se viver e compartilhar momentos especiais."
              modalImg={Img8}
            />
            <Project
              posterImg={Img9}
              title="Projeto Brooklin"
              text="Ambiente de trabalho contemporâneo e inspirador"
              modalTitle="Escritório Criativo"
              modalText1="O escritório é projetado para acomodar uma grande equipe, com várias mesas espaçosas, cada uma equipada com quatro computadores para os funcionários. As mesas e cadeiras são modelos modernos e minimalistas, com linhas limpas e elegantes. A escolha de móveis brancos reflete a luz e cria uma sensação de amplitude no espaço."
              modalText2="O elemento mais marcante deste escritório são as luminárias em preto que pendem do teto. Elas não apenas fornecem iluminação funcional, mas também servem como acentos de design que adicionam sofisticação ao ambiente. A luz é distribuída uniformemente, criando uma atmosfera de trabalho eficiente e confortável."
              modalText3="Este escritório moderno é um espaço de trabalho que impressiona à primeira vista. Com sua paleta de cores neutras, móveis elegantes, iluminação marcante e toques de amarelo vibrante, ele oferece um ambiente inspirador para uma equipe criativa e dinâmica. É um exemplo de como o design de interiores pode não apenas aprimorar a produtividade, mas também criar um ambiente que reflete a cultura e a visão da empresa. Este escritório é o local perfeito para uma equipe que busca um espaço funcional e esteticamente atraente para alcançar grandes realizações."
              modalImg={Img9}
            />
            <Project
              posterImg={Img10}
              title="Projeto Moema"
              text="Um ambiente de descanso que inspira conexão e relaxamento."
              modalTitle="Quarto de Casal Minimalista"
              modalText1="Este quarto de casal foi projetado para criar um refúgio acolhedor e elegante para os moradores. A escolha cuidadosa de materiais naturais, como o piso e as paredes de madeira, combina com elementos em branco para criar uma atmosfera equilibrada e serena. Pequenos detalhes, como almofadas decorativas na cama e acessórios bem escolhidos, como vasos, complementam o estilo do quarto e acrescentam um toque de sofisticação."
              modalText2="Uma janela generosa com cortinas brancas permite a entrada abundante de luz natural, iluminando suavemente o quarto durante o dia. À noite, duas luminárias de mesa, criam uma atmosfera acolhedora e intimista. O teto branco amplia a sensação de espaço e pureza."
              modalText3="Ao lado da cama, uma poltrona confortável convida os moradores a relaxar. Um elegante abajur sobre a poltrona oferece uma luz suave e direcionada para leitura ou momentos de tranquilidade. A escolha cuidadosa de materiais e cores para a poltrona complementa o design geral do quarto."
              modalImg={Img10}
            />
            </div>
        </div>
        </section>
        <Services />
        <Blog/>
        <Contact/>
        <Footer title="Nossa siga nas redes sociais! 😉" />
      </>
    );
  }
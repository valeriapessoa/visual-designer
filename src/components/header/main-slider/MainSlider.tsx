import { HeaderContent } from '../header-content/HeaderContent';
import Carousel from 'react-bootstrap/Carousel';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './styles.css';

interface MainSliderProps {
  posterImg1: string;
  posterImg2: string;
  posterImg3: string;
  posterImg4: string;
  posterImg5: string;
}

export function MainSlider (props: MainSliderProps) {
  const customPrevIcon = <FaAngleLeft className="angle-left" />;
  const customNextIcon = <FaAngleRight className="angle-right" />;

  return (
    <>
    <header>
      <HeaderContent title1="Visual" title2="Design" text1="Seja bem-vindo ao nosso mundo, onde você pode explorar a beleza e a inspiração da arquitetura em um espaço dedicado à magnífica arte da construção" text2="Descubra mais" />

      <div className="post-thumb post-carousel-container">
        <div className="post-container">
          <Carousel id="slide-carousel" controls indicators pause='hover' prevIcon={customPrevIcon} nextIcon={customNextIcon}>
            <Carousel.Item>
              <a href="#" title="Página de Exemplo">
                <img className="img-fluid" src={props.posterImg1} alt="" title="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" title="Página de Exemplo">
                <img className="img-fluid" src={props.posterImg2} alt="" title="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" title="Página de Exemplo">
                <img className="img-fluid teste" src={props.posterImg3} alt="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" title="Página de Exemplo">
                <img className="img-fluid teste" src={props.posterImg4} alt="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" title="Página de Exemplo">
                <img className="img-fluid teste" src={props.posterImg5} alt="" />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </header>
    </>
  );
}

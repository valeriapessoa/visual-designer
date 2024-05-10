import { HeaderContent } from '../header/header-content/HeaderContent';
import Carousel from 'react-bootstrap/Carousel';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './styles.css';


interface MainSliderProps {
  posterImg1: string;
  posterImg2: string;
  posterImg3: string;
}

export function MainSlider (props: MainSliderProps) {
  const customPrevIcon = <FaAngleLeft className="angle-left" />;
  const customNextIcon = <FaAngleRight className="angle-right" />;

  return (
    <>
    <header>
      <HeaderContent title1="Interior" title2="Design" text1="Lorem ipsum dolor sit amet, nam te agam soleat cetero, his ad exerci quodsi sententiae putent bonorum ne.
        Lorem ipsum dolor sit amet, nam te agam soleat cetero, his ad exerci quodsi sententiae putent bonorum ne." text2="Find Out More" />
      <div className="post-thumb post-carousel-container">
        <div className="post-container">
          <Carousel id="slide-carousel" controls indicators pause='hover' prevIcon={customPrevIcon} nextIcon={customNextIcon}>
            <Carousel.Item>
              <a href="javascript:void(0)" title="Página de Exemplo">
                <img className="img-fluid" src={props.posterImg1} alt="" title="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="javascript:void(0)" title="Página de Exemplo">
                <img className="img-fluid" src={props.posterImg2} alt="" title="" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="javascript:void(0)" title="Página de Exemplo">
                <img className="img-fluid" src={props.posterImg3} alt="" />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </header>
    </>
  );
}

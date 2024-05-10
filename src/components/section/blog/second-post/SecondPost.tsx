import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import { BsCardImage } from "react-icons/bs";
import { FaComments, FaHeart, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { EntryHeader } from '../entry-header/EntryHeader';

interface SecondPostProps {
  posterImg1: string;
  posterImg2: string;
  posterImg3: string;
  text1: string;
  text2: string;
}

export function SecondPost(props: SecondPostProps) {

  const customPrevIcon = <FaAngleLeft className="angle-left" />;
  const customNextIcon = <FaAngleRight className="angle-right" />;
  return (
    <div className="post-thumb post-carousel-container">
      <div className="post-container">
        <Carousel id="post-carousel" controls indicators pause='hover' prevIcon={customPrevIcon} nextIcon={customNextIcon}>
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
              <img className="img-fluid" src={props.posterImg3} alt="" />
            </a>
          </Carousel.Item>
        </Carousel>
        <div className="post-meta">
          <span><FaComments className="comments-o" /></span><span>{props.text1}</span>
          <span className="ps-2"><FaHeart className="heart" /></span><span>{props.text2}</span>
        </div>
      </div>
      <div className="post-icon"><BsCardImage className="picture-o" /></div>
      <EntryHeader id={3} title="Casa de Praia com Charme Rústico" text1="16 de Julho, 2022" text2="em" text3="SãoPaulo" text4="Esta casa de praia é um verdadeiro refúgio, onde a beleza da natureza se combina com um design descontraído e sofisticado.  O local perfeito para escapar da agitação do dia a dia e desfrutar da serenidade do litoral." text5="Veja mais" />
    </div>
  );
}

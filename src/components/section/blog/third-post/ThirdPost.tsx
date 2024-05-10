import { EntryHeader } from '../entry-header/EntryHeader';
import './styles.css';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ModalComponent from '../../../modal/Modal';
import { useState } from 'react';
import Video from "../../../../assets/images/video.mp4";

interface ThirdPostProps {
  posterImg: string;
  text1: string;
  text2: string;
}

export function ThirdPost (props: ThirdPostProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return (
        <>
        <div className="post-thumb">
        <img className="img-fluid img-video" onClick={openModal} src={props.posterImg} alt="" title=""  />
        <ModalComponent
        show={modalOpen}
        onHide={closeModal}
        title="Design Residencial">
          <div className="row">
            <video controls className="img-fluid">
              <source src={Video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </ModalComponent>
      {modalOpen && <div className="modal-backdrop-custom"></div>}
        <div className="post-meta"><span><FaComments className="comments-o" /></span><span>{props.text1}</span>
        <span className="ps-2"><FaHeart className="heart" /></span><span>{props.text2}</span>
        </div>
        <div className="post-icon"><BsFillCameraVideoFill className="video-camera" /></div>
        </div>
        <EntryHeader id={4} title="O clássico e o contemporâneo" text1= "18 de Março, 2021" text2= "em" text3= "MinasGerais" text4= "O Design Residencial de Luxo que descrevemos é uma obra-prima de sofisticação e modernidade, onde cada detalhe foi meticulosamente pensado para criar um ambiente verdadeiramente excepcional." text5= "Veja mais" />
      </>
    )
}

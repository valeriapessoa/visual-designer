import { useState } from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import './card.css';
import Modal from '../modal/Modal';

interface MainModalProps {
  posterImg: string;
  title: string;
  text1: string;
  text2?: string;
  text3?: string;
  button: string;
  hideOnSmallScren?: boolean;
  modalTitle: string;
  modalText1: string;
  modalText2?: string;
  modalText3?: string;
  modalText4?: string;
  modalImg: string;
}

export default function Card(props: MainModalProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4 wow fadeInLeft ${props.hideOnSmallScren ? 'div-n2':''}`} data-wow-delay=".5s">
        <div className="our-blog-posts-item">
          <div className="blog-posts-thumb">
            <img src={props.posterImg} alt="" title="" className="img-fluid" />
          </div>
          <h6>{props.title}</h6>
          <div className="our-blog-posts-ds">
            <div className="our-blog-posts-bk">
              <div className="entry-ourblog-posts">
                <h6>{props.title}</h6>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <a className="tz-readmore" onClick={openModal}>
                  {props.button}
                  <BsFillPlayFill className='arrow-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalOpen}
        onHide={closeModal}
        title={props.modalTitle}
      >
        <div className="row">
          <div className="col-md-7 col-sm-7 text-center">
            <img src={props.modalImg} alt="" title="" className="img-fluid" />
          </div>
          <div className="col-md-5 col-sm-5">
            <p>{props.modalText1}</p>
            <p>{props.modalText2}</p>
            <p>{props.modalText3}</p>
            <p>{props.modalText4}</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </Modal>
      {modalOpen && <div className="modal-backdrop-custom"></div>}
    </>
  );
}

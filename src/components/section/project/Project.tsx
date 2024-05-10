import "./project.css"
import { useState } from 'react';
import Modal from '../../modal/Modal';
interface ProjectModalProps {
    posterImg: string;
    title: string;
    text: string;
    modalTitle: string;
    modalText1: string;
    modalText2: string;
    modalText3: string;
    modalImg: string;
}

export default function Project (props: ProjectModalProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <>
        <div className="col-lg-4 col-sm-6 wow fadeIn" >
        <div className="grid">
            <figure className="effect-ruby">
                <img src={props.posterImg} alt="" title="" />
                <figcaption>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <a onClick={openModal}> View more </a>
                </figcaption>
            </figure>
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
          </div>
        </div>
        <div className="clearfix"></div>
      </Modal>
      {modalOpen && <div className="modal-backdrop-custom"></div>}
        </>
    )
}



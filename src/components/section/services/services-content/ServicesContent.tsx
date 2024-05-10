import "./styles.css"
import { useState } from 'react';
import ModalComponent from '../../../modal/Modal';

interface ServicesContentProps {
    posterImg: string;
    title1: string;
    title2: string;
    text: string;
    modalTitle: string;
    modalText1: string;
    modalText2?: string;
    modalText3?: string;
    modalImg: string;
}

export default function ServicesContent (props: ServicesContentProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <>
            <div className="col-sm-4 wow fadeIn">
                <div className="service-info">
                    <div className="grid">
                        <figure className="effect-milo"> <img src={props.posterImg} className="img-fluid" alt="" title="" />
                        <figcaption>
                            <h2>{props.title1}<span>{props.title2}</span></h2>
                            <p>{props.text}</p>
                            <a onClick={openModal}></a>
                        </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <ModalComponent
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
            </ModalComponent>
            {modalOpen && <div className="modal-backdrop-custom"></div>}
        </>
    )
}












import { Modal } from 'react-bootstrap';
import './modal.css';
import { ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  children?: ReactNode;
}

function ModalComponent(props: ModalProps) {

  return (
    <Modal show={props.show} onHide={props.onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;

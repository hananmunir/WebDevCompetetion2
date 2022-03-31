import React from "react";
import { Modal, Button } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      style={{ backgroundColor: " #181818" }}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body style={{ backgroundColor: " #181818" }}>
        <header
          className='header-modal'
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(../../images/landing.jpg)`,
            backgroundPosition: "center center",
          }}
        >
          <div className='header-contents'>
            <div className='header-buttons'>
              <button className='header-button'>Play</button>
              <button className='header-button'>More Info</button>
            </div>
          </div>
          <div className='bottom-fade'></div>
        </header>
        <div className='modal-text' style={{ marginTop: "2rem" }}>
          <span
            className='description'
            style={{ color: "#fff", marginTop: "1rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            repellendus sequi voluptatibus, dignissimos ipsum ratione dolorum
            commodi non quo, laudantium vitae laboriosam quidem voluptas
            voluptates dolor hic voluptatum numquam sint!
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Detail() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

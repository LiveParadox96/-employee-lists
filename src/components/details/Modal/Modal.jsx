import React from 'react'
import './Modal'
import ModalWindow from "./ModalWindow/ModalWindow";


const Modal = () => {
    const [isModal, setModal] = React.useState(false);
    return (
      <>
        <button onClick={() => setModal(true)}>Click Here</button>
        <ModalWindow
          isVisible={isModal}
          title="Modal Title"
          content={<p>Add your content here</p>}
          footer={<button>Cancel</button>}
          onClose={() => setModal(false)}
        />
      </>
    );
  };
  

export default Modal
import { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [showModal, setShowModal] = useState();
  return (
    <div className="App">
      <button onClick={() => setShowModal((prev) => !prev)}>Show Modal</button>
      {showModal && (
        <>
          <div className="modal-bg"></div>
          <div className="modal">
            <p>This is a modal</p>
            <button onClick={() => setShowModal((prev) => !prev)}>Okay!</button>
          </div>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState();
  return (
    <div className="App">
      <button onClick={() => setShowModal((prev) => !prev)}>Show Modal</button>
      {showModal && (
        <>
          <div className="modal-bg"></div>
          <div className="modal">
            <h1>This is a modal</h1>
            <button onClick={() => setShowModal((prev) => !prev)}>Okay!</button>
          </div>
        </>
      )}
    </div>
  );
}

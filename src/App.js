import { Route, Routes } from "react-router-dom";
import Modal from "./createModal/modal";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

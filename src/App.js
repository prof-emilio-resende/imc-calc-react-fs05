import "./App.css";
import { useState, useRef } from "react";

import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./domain/Person";


function App() {

  const [person, setPerson] = useState(new Person());
  const heightElem = useRef();
  const weightElem = useRef();

  const calculateImc = async (evt) => {
    evt.preventDefault();
    
    const height = Number(heightElem.current.value);
    const weight = Number(weightElem.current.value);
  
    const p = new Person(height, weight);
  
    const ctrl = new ImcController();
    const result = await ctrl.calculate(p.toObject());
  
    console.log(result);
    setPerson(result);
  }

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
          </div>
          <hr />
          <form onSubmit={calculateImc}>
            <div className="row">
              <label>Altura</label>
              <input id="altura" ref={heightElem} placeholder="0.00" />
            </div>
            <div className="row">
              <label>Peso</label>
              <input id="peso" ref={weightElem} placeholder="0.00" />
            </div>
            <button type="submit" className="action">
              Calcular
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div>
        <ImcView className="data" person={person} />
      </div>
    </div>
  );
}

export default App;

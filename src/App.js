import "./App.css";

import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./domain/Person";
import { useState } from "react";


function App() {

  const [person, setPerson] = useState(new Person())

  const calculateImc = async () => {
    const heightElem = document.querySelector("#altura");
    const weightElem = document.querySelector("#peso");
  
    if (!heightElem) throw Error("height is required!");
    if (!weightElem) throw Error("weight is required!");
  
    const height = Number(heightElem.value);
    const weight = Number(weightElem.value);
  
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
          <div className="row">
            <label>Altura</label>
            <input id="altura" placeholder="0.00" />
          </div>
          <div className="row">
            <label>Peso</label>
            <input id="peso" placeholder="0.00" />
          </div>
          <button type="button" onClick={calculateImc} className="action">
            Calcular
          </button>
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

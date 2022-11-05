import StepList from "components/StepList";
import { useState } from "react";

export default function Editor() {
  const [steps, setSteps] = useState([]);
  const addStep = () => setSteps([...steps, {}]);

  return (
    <div>
      <h2>Editor</h2>
      <hr />
      <StepList steps={steps} />
      <button onClick={addStep}>+</button>
    </div>
  );
}

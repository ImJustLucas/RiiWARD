import { useState } from "react";
import { AddNameProject } from "@screens/Project/AddNameProject";
import { Step2 } from "@screens/Step2";

export default function AddProject() {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      {step == 1 && <AddNameProject step={{ get: step, set: setStep }} />}
      {step == 2 && <Step2 />}
    </>
  );
}

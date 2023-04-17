import { useState, useContext } from "react";
import StepProgress from "./step/StepProgress";
import StepOne from "./step/StepOne";
import StepTwo from "./step/StepTwo";
import StepThree from "./step/StepThree";
import ProgressControl from "./step/ProgressControl";
import { FormContext } from "../../context/FormContext";

export default function Form() {
  const [step, setStep] = useState(1);
  const { formData } = useContext(FormContext);

  function handlePlusStep(e) {
    if (step < 3) {
      setStep((prevState) => prevState + 1);
    } else if (step === 3) {
      e.preventDefault();
      console.log("submitted", formData);
    }
  }

  function handleMinusStep() {
    if (step > 1) {
      setStep((prevState) => prevState - 1);
    }
  }

  return (
    <>
      <StepProgress currentStep={step} />

      <div className={`${step !== 1 && "hidden"}`}>
        <StepOne />
      </div>
      <div className={`${step !== 2 && "hidden"}`}>
        <StepTwo />
      </div>
      <div className={`${step !== 3 && "hidden"}`}>
        <StepThree />
      </div>
      <ProgressControl
        onLeftClick={handleMinusStep}
        onRightClick={handlePlusStep}
        leftButton={step === 1 ? "" : "上一步"}
        rightButton={step < 3 ? "下一步" : "完成訂單"}
        display={step === 0 && "hidden"}
        type={step === 3 ? "submit" : "button"}
      />
    </>
  );
}

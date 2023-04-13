import { useState } from "react";
import "./index.css";
import Header from "./components/header/Header";
import StepProgress from "./components/main/step/StepProgress";
import StepOne from "./components/main/step/StepOne";
import StepTwo from "./components/main/step/StepTwo";
import StepThree from "./components/main/step/StepThree";
import Cart from "./components/main/Cart";
import ProgressControl from "./components/main/step/ProgressControl";

function App() {
  const [step, setStep] = useState(1);

  function handlePlusStep() {
    if (step < 3) {
      setStep((prevState) => prevState + 1);
    }
  }

  function handleMinusStep() {
    if (step > 1) {
      setStep((prevState) => prevState - 1);
    }
  }

  return (
    <div>
      <Header />
      <div className="w-4/5 mx-auto grid grid-cols-12 gap-8">
        <div className="py-20 col-span-6">
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
          />
        </div>
        <div className="py-20 col-span-5">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;

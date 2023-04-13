function Line() {
  return <span className="block h-0.5 w-16 my-3 bg-gray-900 mx-8" />;
}

function Step({ currentStep, step, label }) {
  const completedStepStyle = currentStep > step && "bg-black text-white";
  const notCompletedStepStyle =
    currentStep < step ? "text-gray-500" : "text-black ";
  const borderStyle = currentStep < step ? "border-gray-500" : "border-black";
  return (
    <div
      className={`flex flex-row text-gray-500 ${notCompletedStepStyle}`}
      id={step}
    >
      <div
        className={`rounded-3xl border w-6 h-6 flex flex-row justify-center items-center mr-2 ${borderStyle} ${completedStepStyle}`}
      >
        <span className="text-xs">{step}</span>
      </div>
      <div className="">{label}</div>
    </div>
  );
}

export default function StepProgress({ currentStep }) {
  return (
    <>
      <h1 className="text-3xl font-bold">結帳</h1>
      <div className="flex flex-row py-10">
        {/* Step one */}
        <Step step={1} currentStep={currentStep} label="寄送地址" />

        {/* Line */}
        <Line />

        {/* Step two */}
        <Step step={2} currentStep={currentStep} label="運送方式" />

        {/* Line */}
        <Line />

        {/* Step three */}
        <Step step={3} currentStep={currentStep} label="付款資訊" />
      </div>
    </>
  );
}

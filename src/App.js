import { useState, useContext } from "react";
import { FormContext } from "./context/FormContext";
import "./index.css";
import Header from "./components/header/Header";
import Form from "./components/main/Form";
import Cart from "./components/main/Cart";

function App() {
  const formDataContext = useContext(FormContext);
  const [formData, setFormData] = useState(formDataContext);

  function handleFormChange(e) {
    const value = e.target.value;
    const key = e.target.name;

    setFormData({ ...formData, [key]: value });
  }

  return (
    <div>
      <Header />
      <div className="w-4/5 mx-auto grid grid-cols-12 gap-8">
        <FormContext.Provider
          value={{ formData, setFormData, handleFormChange }}
        >
          <div className="py-20 col-span-6">
            <Form />
          </div>
          <div className="py-20 col-span-5">
            <Cart />
          </div>
        </FormContext.Provider>
      </div>
    </div>
  );
}

export default App;

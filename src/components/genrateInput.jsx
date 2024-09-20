import { useState } from "react";
import InputView from "./utils/inputView";

const GenrateInput = () => {
  const [inputs, setInputs] = useState([
    {
      label: "Name",
      type: "text",
      name: "name",
      value: "",
      placeholder: "Enter name",
      errMsg: "Please enter a valid name",
      readOnly: false,
      hasError: false,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: "",
      placeholder: "Enter email",
      errMsg: "Please enter a valid email",
      readOnly: false,
      hasError: false,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: "",
      placeholder: "Enter password",
      errMsg: "Please enter a valid password",
      readOnly: false,
      hasError: false,
    },
  ]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, value } : input
      )
    );
  };

  const onSubmit = () => {};

  return (
    <div>
      {inputs.map((item) => {
        return (
          <InputView
            key={item.name}
            name={item.name}
            type={item.type}
            value={item.value}
            onInputChange={onInputChange}
            placeholder={item.placeholder}
            hasError={item.hasError}
            errMsg={item.errMsg}
            label={item.label}
          />
        );
      })}

      <div className="form-element">
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GenrateInput;

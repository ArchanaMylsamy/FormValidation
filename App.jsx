import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput.jsx";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    image: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Please fill the column",
      label: "Enter your username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid Email",
      label: "Enter your email",
      required: true,
    },
    {
      id: 3,
      type : "password",
      label : "Enter your password",
      placeholder : "Password",
      datatestid : 'password',
      required: true,
      minlength:"4",
      maxlength:"12",
      errorMessage: "It must contain minimum four letters.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>DYNAMIC FORM</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default App;

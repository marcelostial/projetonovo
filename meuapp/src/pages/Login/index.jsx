import React from "react";
import useForm from "../../utils/Hooks/useForm";
import "./index.css";
import Logo from "../../assents/logoInternSingUp.png";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const [ageValidate, setAgeValidate] = React.useState("false");

  const nav = useNavigate();

  const email = useForm("email");
  const phone = useForm("phone");
  const password = useForm("password");
  const name = useForm("name");

  const [errorAge, setErrorAge] = React.useState(null);
  const [errorCheckbox, setErrorCheckbox] = React.useState(null);

  const ageCalculation = (e) => {
    let birthday = parseInt(e.target.value.slice(0, 4));
    let date = new Date();
    let year = date.getFullYear();
    let dateA = year - birthday;
    if (dateA < 120) {
      setAgeValidate("true");
      setErrorAge(null);
    } else {
      setAgeValidate("false");
      setErrorAge("Age Invalid");
    }
    if (ageValidate === "false") {
      setErrorAge("Age Invalid");
    }
  };
  function handleChange({ target }) {
    if (target.checked) {
      setChecked(true);
      setErrorCheckbox(null);
      console.log("esta  checado");
    } else {
      setChecked(false);
      console.log("esta  deschecado");
      setErrorCheckbox("You most accept the therms");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (
      email.validate() &&
      name.validate() &&
      phone.validate &&
      password.validate &&
      ageValidate === "true" &&
      checked === true
    ) {
      nav("/Sucess");
    } else {
      console.log("Não enviar");
      setErrorCheckbox("You most accept the therms");
    }
  }

  return (
    <>
      <div className="main">
        <div className="content-header">
          <header>
            <img draggable="false" src={Logo} alt="logo"></img>
            <h1>Intern Sing Up</h1>
          </header>
        </div>
        <div className="content-form">
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name*"
              id="name"
              type="text"
              placeholder="Name"
              required
              {...name}
            />
            <div className="modal-form">
              <Input
                label="Email*"
                id="email"
                type="email"
                placeholder="foo@bar.com"
                required
                {...email}
              />

              <Input
                label="Password*"
                id="password"
                type="password"
                required
                {...password}
              />
            </div>
            <div className="sidemodal-form">
              <Input
                label="Phone*"
                id="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="(83) 00000-0000"
                required
                {...phone}
              />
              <Select
                label="Birthday*"
                id="birthday"
                onSelect={ageCalculation}
                required
              />
            </div>
            <div id="age-modal">{errorAge && <p id="ageId">{errorAge}</p>}</div>
            <div className="modal-finally">
              <Checkbox
                value={["I accept the terms and privacy"]}
                onChange={handleChange}
              />
              <Button text="Register" id="form" />
              <div id="check-modal">
                {" "}
                {errorCheckbox && <p id="checkId">{errorCheckbox}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

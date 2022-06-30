import React from "react";
import useForm from "../../utils/Hooks/useForm";
import "./index.css";
import Logo from "../../assents/logoInternSingUp.png";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [accept, setAccpt] = React.useState(false);
  const [ageValidate, setAgeValidate] = React.useState("false");

  const nav = useNavigate();

  const email = useForm("email");
  const birthday = useForm("birthday");
  const phone = useForm("phone");
  const password = useForm("password");
  const name = useForm("name");

  const [style, setStyle] = React.useState("ageP");

  const changeStyle = () => {
    console.log("to trocando");
    setStyle("ageOk");
  };

  // const acceptLogicial = (e) => {
  //   setAgeValidate;
  // };
  const ageCalculation = (e) => {
    let birthday = parseInt(e.target.value.slice(0, 4));
    let date = new Date();
    let year = date.getFullYear();
    let dateA = year - birthday;
    if (dateA < 120) {
      setAgeValidate("true");
    } else {
      changeStyle();
      setAgeValidate("false");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      email.validate() &&
      name.validate() &&
      phone.validate &&
      password.validate &&
      birthday.validate() &&
      ageValidate === "true"
    ) {
      nav("/Sucess");
    } else {
      console.log("Não enviar");
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
                label="Phone*"
                id="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="(83) 00000-0000"
                required
                {...phone}
              />

              <Input
                label="Password*"
                id="password"
                type="password"
                required
                {...password}
              />
              <Input
                label="Birthday*"
                id="birthday"
                type="date"
                onSelect={ageCalculation}
                required
                {...birthday}
                error="Age Invalid"
                idError={style}
              />
            </div>
            <div className="modal-finally">
              <Checkbox
                options={["I accept the terms and privacy"]}
                value={accept}
                setValue={setAccpt}
                error="You most accept the therms"
                idError="checkbox"
                required={setAccpt}
              />
              <Button text="Register" id="form" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

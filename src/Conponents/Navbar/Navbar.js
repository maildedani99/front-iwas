import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/iwastextblue.png";
import "../Navbar/navbar.css";
import Button from "../Button";
import LoginModal from "../LoginModal";

const Navbar = (props) => {
  const [loginModalOpened, setLoginModalOpened] = useState(false);

  const onIniciar = () => {
    console.log("inciciar sesion click");
  };

  return (
    <div className="navbar border-b	w-full	">
      <LoginModal
        loginModalOpened={loginModalOpened}
        setLoginModalOpened={setLoginModalOpened}
      />

      <div className="ml-4 flex flex-col mt-4 ">
        <div className="">
          <img src={logo} alt="iwas" width="150px" />
        </div>
      </div>
      <div className="flex flex-1"></div>
      <div className="mt-6 mr-4">
        <Button
          value="Iniciar sesión"
          onClick={() => setLoginModalOpened(true)}
          textColor="white"
          //backgroundColor="#e60023"
          backgroundColor="#04a5a4"
        />
      </div>
      <div className="mt-6 mr-4">
        <Button
          value="Registrarse"
          onClick={onIniciar}
          textColor="Black"
          backgroundColor="#efefef"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;

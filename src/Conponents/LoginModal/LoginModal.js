import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import logo from "../../assets/iwblue.png";
import google from "../../assets/google.png";

import {
  focusInputStyles,
  focusSearchStyles,
  inputStyles,
  searchStyles,
} from "../../styles/styles";
import Button from "../Button/index";
import InputText from "../InputText/InputText";

const LoginModal = ({ loginModalOpened, setLoginModalOpened }) => {
  const onCloseModal = () => setLoginModalOpened(false);

  return (
    <div>
      <Modal open={loginModalOpened} onClose={onCloseModal} center>
        <div className="text-5xl mt-8 flex flex-col items-center	font-bold	  text-center	">
          <img src={logo} alt="iwas" width="50px" />
          <span className="mt-8">Bienvenido a Iwas</span>
          <InputText
            className="mt-20 text-xl"
            style={inputStyles}
            focusStyle={focusInputStyles}
            placeholder="Correo"
          />
          <InputText
            className="mt-5 text-xl"
            style={inputStyles}
            focusStyle={focusInputStyles}
            placeholder="Contraseña"
          />
          <span className="text-sm mt-4 mb-8">¿Olvidaste tu contraseña?</span>
          <div className="text-2xl w-1/2 mb-6 ">
            <Button
              value="Iniciar sesión"
              onClick={() => console.log("inciar sesion click")}
              textColor="white"
              //backgroundColor="#e60023"
              backgroundColor="#04a5a4"
            />
          </div>
          <div className="text-xl font-normal mt-4 mb-6">o</div>
          <div className="flex flex-row text-2xl border rounded-full p-3 mb-16">
            <img src={google} alt="google" width="48px" />
            <Button value="Continuar con Google" />
          </div>
          <div className="flex w-6/12 text-sm font-normal 	">
            <p>
              Si continúas, aceptas los <strong>Términos del servicio</strong>{" "}
              de Iwas y confirmas que has leído nuestra{" "}
              <strong>Política de privacidad</strong>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

LoginModal.propTypes = {};

export default LoginModal;

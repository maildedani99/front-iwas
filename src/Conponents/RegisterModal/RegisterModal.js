import React from "react";
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

const RegisterModal = ({ registerModalOpened, setRegisterModalOpened }) => {

    const onCloseModal = () => setRegisterModalOpened (false);


  return (
    <div>
      <Modal open={registerModalOpened} onClose={onCloseModal} center>
      <div className="text-2xl mt-8 flex flex-col items-center font-bold text-center	">
          <img src={logo} alt="iwas" width="50px" />
          <span className="mt-8 text-4xl">Bienvenido/a a </span>
          <span className="mt-2 text-4xl">Iwas</span>
          <InputText
            className="mt-8 text-base"
            style={inputStyles}
            focusStyle={focusInputStyles}
            placeholder="Correo"
          />
          <InputText
            className="mt-2 text-base"
            style={inputStyles}
            focusStyle={focusInputStyles}
            placeholder="Contraseña"
          />
          <InputText
            className="mt-2 text-base"
            style={inputStyles}
            focusStyle={focusInputStyles}
            placeholder="Verifica Contraseña"
          />
          <span className="text-sm mt-1 mb-8">¿Olvidaste tu contraseña?</span>
          <div className="text-base w-1/2  ">
            <Button
              value="Continuar"
              onClick={() => console.log("inciar sesion click")}
              textColor="white"
              //backgroundColor="#e60023"
              backgroundColor="#04a5a4"
            />
          </div>
          <div className="text-base font-normal mt-4 mb-4">o</div>
          <div className="flex flex-row text-base w-1/2  border rounded-full px-4 py-1 mb-6">
            <div className="flex w-6  h-6 mt-2">
              <img src={google} alt="google" />
            </div>
            <div className="ml-8">
              <Button value="Continuar con Google" />
            </div>
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

RegisterModal.propTypes = {};

export default RegisterModal;

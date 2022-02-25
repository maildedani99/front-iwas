import React from 'react';
import PropTypes from 'prop-types';
import { sideNavStyles } from './styles';

const SideNav = props => {
  return (
    <div className="text-2l flex flex-col  text-slate-500 fixed w-2/12" >
      <div className="py-4 pt-16   hover:text-slate-700" style={sideNavStyles}>
        <span className="ml-4" >Imagenes</span>
      </div>
      <div className="py-4   hover:text-slate-700" style={sideNavStyles}>
        <span className="ml-4">Participantes</span>
      </div>
      <div className="py-4   hover:text-slate-700" style={sideNavStyles}>
        <span className="ml-4">Comentarios</span>
          </div>
          <div className="py-4 hover:text-slate-700" style={sideNavStyles}>
        <span className="ml-4">Configuración</span>
          </div>
          <div className="py-4  hover:text-slate-700" style={sideNavStyles}>
        <span className="ml-4">Mi perfil</span>
      </div>
     
    </div>
  );
};

SideNav.propTypes = {};

export default SideNav;

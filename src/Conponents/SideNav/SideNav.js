import React from 'react';
import PropTypes from 'prop-types';

const SideNav = props => {
  return (
    <div className="text-2l flex flex-col  text-slate-500 fixed w-2/12">
      <div className="py-4 pt-16 shadow cursor-pointer hover:text-slate-700">
        <span className="ml-4" >Imagenes</span>
      </div>
      <div className="py-4 shadow cursor-pointer hover:text-slate-700">
        <span className="ml-4">Participantes</span>
      </div>
      <div className="py-4 shadow cursor-pointer hover:text-slate-700">
        <span className="ml-4">Comentarios</span>
          </div>
          <div className="py-4 shadow cursor-pointer hover:text-slate-700">
        <span className="ml-4">Configuración</span>
          </div>
          <div className="py-4 shadow cursor-pointer hover:text-slate-700">
        <span className="ml-4">Opcion 5</span>
      </div>
     
    </div>
  );
};

SideNav.propTypes = {};

export default SideNav;

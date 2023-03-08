import React from 'react'
import { ReactSVG } from 'react-svg'
import mapData from '../../maps/peruMap.svg'
import { asignColorToRegion } from '../../utils/Helper'
import './styles.css'

export const PeruMap = ({ setRegionText }) => (
  <div>
    <ReactSVG src = { mapData } beforeInjection={ svg => {
      // Personalización de estilos y atributos de datos para cada path
      const paths = svg.querySelectorAll("path");
      for (let i = 0; i < paths.length; i++) {
        let pathValue = paths[i].attributes[0].value
        paths[i].classList.add("path");
        paths[i].setAttribute("fill", asignColorToRegion(pathValue));
        paths[i].addEventListener("click", () => setRegionText(pathValue));
      }
    }}/>
  </div>
);
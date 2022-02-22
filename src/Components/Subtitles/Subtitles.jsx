import React from "react";
import { SubtitleStyle } from "./Style.jsx";
import image1 from './img/iconeMonitor.png'
import image2 from './img/iconeComponents.png'
import image3 from './img/iconeEasy.png'
import { SubContent } from "./SubContent.jsx/SubContent.jsx";


export function Subtitles(){
  
  return(
    <div>
      <SubtitleStyle>

         <SubContent image={image1} titulo="Somente para desktop" subtitulo="Vamos aprender como utilizar um framework."/>
         <SubContent image={image2} titulo="Criado com componentes" subtitulo="Utilizamos oStyle Components."/>
         <SubContent image={image3} titulo="Facíl aproveitamento" subtitulo="Estamos no caminho."/>
         
      </SubtitleStyle>   



      
    </div>



  )


}
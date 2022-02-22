import React from "react";
import Imagem1 from './img/face.jpg'
import Imagem2 from './img/twitter.jpg'
import Imagem3 from './img/insta.png'
import { SocialMidiaStyle } from "./style";


export function SocialMidia(){
  return(
    
    <SocialMidiaStyle>
      <img src={Imagem1}  />
      <img src={Imagem2}  />
      <img src={Imagem3}  />
    </SocialMidiaStyle>


  )
}
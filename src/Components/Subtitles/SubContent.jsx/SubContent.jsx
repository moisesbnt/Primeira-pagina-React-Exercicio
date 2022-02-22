import React from "react";
import { SubContentStyle } from "./SubStyle";


export function SubContent(props){
  return(
    <SubContentStyle>
      <img src={props.image}/>
      <h1>{props.titulo}</h1>
      <p>{props.subtitulo}</p>
    </SubContentStyle>
  )
}


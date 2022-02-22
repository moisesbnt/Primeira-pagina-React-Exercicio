import React from "react";
import styled from "styled-components";

export const TitleStyle = styled.h1`
color:#fff;
font-family:  "Google Sans", Roboto, arial, sans-serif;

`

export function Title(props){
  return(
    <div>
       <TitleStyle>Minha primeira página com React.</TitleStyle>  
    </div>
    
  )
}
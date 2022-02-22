import React from "react";
import styled from "styled-components";

export const TextStyle = styled.div`
display: flex;
flex-direction: column;
padding:38px;


width: 50%;

`
export function BoxText(props){
  return(
    <TextStyle>
       <h2>{props.titulo}</h2>
       <p>{props.children}</p>
    </TextStyle>
  )
}
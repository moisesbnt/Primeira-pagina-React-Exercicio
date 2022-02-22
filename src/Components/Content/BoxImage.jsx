import React from "react";
import styled from "styled-components";

export const ImageStyle = styled.img`
width: 50%;
background-image:${props => props.image };
background-size: cover;

`


export function BoxImage(props){
  return(
    <ImageStyle src={props.image}  />

  )
}
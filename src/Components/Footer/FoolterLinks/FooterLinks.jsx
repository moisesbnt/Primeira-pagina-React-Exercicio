import React from "react"
import { FooterLinksStyle } from "./style"
import styled from "styled-components"

export const CopyRigth = styled.h5`

color: #949191;
margin-left: 95px;
margin-top: 0px;

`
export function FooterLinks(){
  return(
      <>
      <FooterLinksStyle> 
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Terms of Use</h4>
        <h4>Privacy Policy</h4>
      </FooterLinksStyle>
    
    <CopyRigth>© Your Website 2022.All Rights Reserved</CopyRigth>

</>

  )
}





  


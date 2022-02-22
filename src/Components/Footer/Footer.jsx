import React from "react";
import { FooterStyle } from "./style";
import { FooterLinks } from "./FoolterLinks/FooterLinks";
import { SocialMidiaStyle } from "./SocialMidia/style";
import styled from "styled-components";

export const FooterMainStyle = styled.div`
width: 100%;
height: 150px;
display: flex;

;
`



export function Footer(){
  return(
    <>
    <FooterMainStyle>
    <FooterStyle>
        <FooterLinks></FooterLinks>
    </FooterStyle>
    
    <SocialMidiaStyle></SocialMidiaStyle>
    </FooterMainStyle>
</>
  )
}
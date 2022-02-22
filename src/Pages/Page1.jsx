import React from "react";
import { HeaderStyle } from "../Components/Header/style";
import { Subtitles } from "../Components/Subtitles/Subtitles";
import { Titulo } from "../Components/Contact/Titulo/Titulo";
import { Content } from "../Components/Content/Content";
import { ContactStyle } from "../Components/Contact/style";
import { Title } from "../Components/Header/Title/Title";
import { FooterStyle } from "../Components/Footer/style";
import { FooterLinks } from "../Components/Footer/FoolterLinks/FooterLinks";
import { SocialMidia } from "../Components/Footer/SocialMidia/SocialMidia";
import { FooterMainStyle } from "../Components/Footer/Footer";
export function Page1(){
return(
  <>

    <HeaderStyle>
      <Title/>
    </HeaderStyle>
    <Subtitles/>
    <Content/>
    <ContactStyle>
      <Titulo/>
    </ContactStyle>
    <FooterMainStyle>
        <FooterStyle>
         <FooterLinks></FooterLinks>
        </FooterStyle>
      <SocialMidia></SocialMidia>
    </FooterMainStyle>


  </>
  
)

}
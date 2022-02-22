import React from "react";
import image1 from './img/cellphoneimage.jpg'
import image2 from './img/codeimage.jpg'
import image3 from './img/kidimage.jpg'
import {ContentStyle} from './style.jsx'
import {BoxText} from './BoxText.jsx'
import {BoxImage} from './BoxImage.jsx'



export function Content(props){
  return(
    <>
     <ContentStyle>
          <BoxText titulo="Lorem Ipsum">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce porta lorem nec felis convallis, vel lobortis diam faucibus. Sed vel auctor nisl, quis mattis ex. </p>
          </BoxText>
          <BoxImage image={image1} />
     </ContentStyle>
       


     <ContentStyle>
     <BoxImage image={image2}></BoxImage>
       <BoxText titulo="Lorem Ipsum">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce porta lorem nec felis convallis, vel lobortis diam faucibus. Sed vel auctor nisl, quis mattis ex. </p>
       </BoxText>
     </ContentStyle>

       

     <ContentStyle>
       <BoxText titulo="Lorem Ipsum">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce porta lorem nec felis convallis, vel lobortis diam faucibus. Sed vel auctor nisl, quis mattis ex.  </p>
       </BoxText>
       <BoxImage image={image3}></BoxImage>
     </ContentStyle>
     
     </>

  )
}
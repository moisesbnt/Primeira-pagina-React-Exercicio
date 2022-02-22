import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Page1 } from "./Pages/Page1";

export default function Router(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/Page1" element={<Page1/>}/>
     </Routes>
    </BrowserRouter>




  )
}
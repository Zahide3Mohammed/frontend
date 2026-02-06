import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TermsJourney from "./Compenents/terms.jsx";
import Logup from "./pages/logup.jsx";
import Questiones_Teste from "./pages/teste_personnalité.jsx";
import Resultats_test from "./pages/result_teste.jsx";
import Home from "./pages/home.jsx";
import Password from "./Compenents/password.jsx";



export default function App() {
  
  return <>   
   <BrowserRouter>      
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Logup />} />
      <Route path="/terms" element={<TermsJourney />} />
      <Route path="/password" element={<Password />} />
      <Route path="/Questions" element={<Questiones_Teste />} />
      <Route path="/Résultats-test" element={<Resultats_test />} />
      <Route path="/profil" element={<App />} />
      <Route path="/inscription-questions" element={<App />} />
    </Routes>
    </BrowserRouter>  
  </>
  
}
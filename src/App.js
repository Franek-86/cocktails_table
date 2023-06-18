import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cocktails from "./pages/Cocktails";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import Instructions from "./pages/Instructions";
import Contact from "./pages/Contact";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Breadcrumbs />
      <Routes>
        <Route path='/' element={<Cocktails />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='cocktail/:id/instructions' element={<Instructions />} />
        <Route path='/cocktail/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Header from "./component/Header" ;
import Footer from "./component/Footer" ;

function App(){
  return(
      <BrowserRouter>
          <Header />
          <Routes>
              <Route  path="/" element={<Home />} />
          </Routes>
          <Footer />
      </BrowserRouter>

  )
}

export default App;


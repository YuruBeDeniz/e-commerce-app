import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageContainer from "./containers/PageContainer.jsx";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <PageContainer>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
    </Router>
    </PageContainer>
    </>
  );
}

export default App;

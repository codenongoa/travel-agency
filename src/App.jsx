import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Navbar from "./Componnents/Navbar"
import Footer2 from "./Componnents/Footer2"
// import NavbarWithSidebar from "./Componnents/Nav"
// import Home2 from "./Pages/Home2"
// import Navbar2 from "./Componnents/Navbar2"





function App() {
  return (
    <BrowserRouter>
      {/* <Navbar2 /> */}
      <Navbar />
      {/* <NavbarWithSidebar /> */}
      <Routes>
        {/* <Route path="/" element={ <Home2 />}></Route> */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer2 />
    </BrowserRouter>
  )
}
 
export default App
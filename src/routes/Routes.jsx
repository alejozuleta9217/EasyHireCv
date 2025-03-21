import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from "../layouts/Nav";
import Home from "../pages/home";

const NavegationRoute = () => {
  return (
    <Router>
      <Nav />
      <Routes>
         <Route path="/" element={<Home/>} />
        {/*<Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default NavegationRoute;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error_404 from "./pages/404";
import Home from "./pages/Home";

// CSS PAGE
// import "./pages/assets/vendors/mdi/css/materialdesignicons.min.css";
// import "./pages/assets/vendors/css/vendor.bundle.base.css"
// import "./pages/assets/css/style.css"
// import "./pages/assets/images/favicon.png"

function WebQL() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Homes />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route index element={<Home />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<Error_404 />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebQL />);
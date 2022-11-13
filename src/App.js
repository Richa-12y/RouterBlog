import "./App.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Dashbord from "./components/Dashbord";
import Setting from "./components/Setting";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Signin from "./components/Signin";
import ProtectWrapper from "./components/ProtectWrapper";
function App() {
  const navigate = useNavigate();
  const gotothatpage = (value) => {
    navigate(value);
  };

  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <button onClick={() => gotothatpage("/contactus")}>contactus</button>
      <button onClick={() => gotothatpage("/dashbord")}>dashbord</button>
      <button onClick={() => gotothatpage("/setting")}>setting</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashbord"
          element={
            <ProtectWrapper user={"You are sin"}>
              <Dashbord />
            </ProtectWrapper>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectWrapper user={"You are sin"}>
              <Setting />
            </ProtectWrapper>
          }
        />

        <Route path="/contactus" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

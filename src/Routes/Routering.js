import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Page from "../Routesmenu.js/Page";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
};
export default Routering;

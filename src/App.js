import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={EmployeeList} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

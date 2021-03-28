import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import List from "./pages/List";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <List />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

import Header from "remote/Header";
import Footer from "remote/Footer";

import "./index.scss";

const App = () => (
  <div className="container">
    <Header />
    <main>
      <h3>Host1</h3>
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

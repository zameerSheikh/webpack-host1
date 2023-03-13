import React from "react";
import ReactDOM from "react-dom";

import Header from "remote/Header";
import Footer from "remote/Footer";
import Dashboard from "remote/Dashboard";

import "./index.scss";
import "./App.css";

const App = () => (
  <div className="container">
    <Header />
    <main>
      <Dashboard />
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

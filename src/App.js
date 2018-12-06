import React, { Component } from "react";
import UserForm from "./components/user-form/UserForm";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App">
          <UserForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

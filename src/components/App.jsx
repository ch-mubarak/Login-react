import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function Home() {
  return isLoggedIn ? <h1>Hello</h1> : <Login />
}

function App() {
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;

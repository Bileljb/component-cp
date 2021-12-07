import "./App.css"
import { Ppicture } from "./Component/Profile/ProfilePhoto";
import { Fname } from "./Component/Profile/FullName";
import { Addr } from "./Component/Profile/Address";
import React from "react";
function App() {
  return (
    <div className="App">
      <Ppicture></Ppicture>
      <Fname></Fname>
      <Addr></Addr>
    </div>
  );
}

export default App;
